# Generic Multi-Thread Mapper

This is a generic multi-thread task runner (more specifically, mapper) convert the input key-value-pairs to output key-value-pairs. All threads are running locally.

The worker interface:

  ```java
/**
 * The interface defining a processing worker. The task runner will distribute
 * the tasks to different workers. So the worker should do the processing task
 * and use collector to collect the result.
 * 
 * @param <IK>
 *            The type of the input key.
 * @param <IV>
 *            The type of the input value.
 * @param <OK>
 *            The type of the output key.
 * @param <OV>
 *            The type of the output value.
 */
public interface ParallelTaskWorker<IK, IV, OK, OV> {
	/**
	 * The processing method to be implemented by the specified worker.
	 * 
	 * @param inputKey
	 *            The input key.
	 * @param inputValue
	 *            The input value.
	 * @param collector
	 *            The collector used to collect the result.
	 */
	public void process(IK inputKey, IV inputValue, ParallelTaskCollector<OK, OV> collector);
}
  ```

And the output key-value-pair collector:

  ```java
package edu.kit.aifb.news2wiki.utilities;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * This class is used to collect the output key-value pairs.
 * 
 * @param <K>
 *            The type of the output key.
 * @param <V>
 *            The type of the output value.
 */
public class ParallelTaskCollector<K, V> {
	private ConcurrentHashMap<K, V> resultMap;

	/**
	 * Initialize an empty collector.
	 */
	protected ParallelTaskCollector() {
		resultMap = new ConcurrentHashMap<K, V>();
	}

	/**
	 * Add one output key-value pair to the collector.
	 * 
	 * @param key
	 *            The output key.
	 * @param value
	 *            The output value.
	 */
	public synchronized void collect(K key, V value) {
		resultMap.put(key, value);
	}

	/**
	 * Get the final result.
	 * 
	 * @return A map of the output key-value pair.
	 */
	protected Map<K, V> getResultMap() {
		return new HashMap<K, V>(resultMap);
	}
}
  ```

Finally, the task runner:

  ```java
package edu.kit.aifb.news2wiki.utilities;

import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * A helper class to run a task in multiple threads. It simple maps a
 * key-value-pair to another key-value pair.
 * 
 * @param <IK>
 *            The type of the input key.
 * @param <IV>
 *            The type of the input value.
 * @param <OK>
 *            The type of the output key.
 * @param <OV>
 *            The type of the output value.
 */
public class ParallelTaskRunner<IK, IV, OK, OV> {
	private int threadNumber;
	private ParallelTaskCollector<OK, OV> collector;
	private Map<IK, IV> input;
	private ParallelTaskWorker<IK, IV, OK, OV> worker;
	private AtomicBoolean allTasksAdded;

	/**
	 * Initialize the task runner with the map of input data, the map of output
	 * data and the number of threads.
	 * 
	 * @param threadNumber
	 *            The number of threads.
	 */
	public ParallelTaskRunner(int threadNumber) {
		this.threadNumber = threadNumber;
		this.collector = new ParallelTaskCollector<OK, OV>();
		this.input = null;
		this.worker = null;
		this.allTasksAdded = new AtomicBoolean(false);
	}

	/**
	 * Set the input key-value pairs.
	 * 
	 * @param input
	 *            A map of input key-value pairs.
	 */
	public void setInput(Map<IK, IV> input) {
		this.input = input;
	}

	/**
	 * Set the worker to do the mapping job.
	 * 
	 * @param worker
	 *            A worker that maps input key-value pairs to the output
	 *            key-value pairs.
	 */
	public void setWorker(ParallelTaskWorker<IK, IV, OK, OV> worker) {
		this.worker = worker;
	}

	/**
	 * Run the task.
	 * 
	 * @param inParallel
	 *            If set to true, the task will be started in parallel,
	 *            otherwise use single thread to do the processing.
	 * @throws InterruptedException
	 */
	public void run(boolean inParallel) throws InterruptedException {
		// Early checks:
		if (input == null || worker == null) {
			throw new NullPointerException("You have to set input and workers before starting the tasks.");
		}

		if (!inParallel) {
			Iterator<Entry<IK, IV>> it = input.entrySet().iterator();
			while (it.hasNext()) {
				Entry<IK, IV> pair = (Entry<IK, IV>) it.next();
				worker.process(pair.getKey(), pair.getValue(), collector);
			}

			return;
		}

		// Make a concurrent task queue:
		ConcurrentLinkedQueue<Entry<IK, IV>> taskQueue = new ConcurrentLinkedQueue<Entry<IK, IV>>();

		// Create slaves:
		Thread[] workers = new Thread[threadNumber];
		for (int i = 0; i < threadNumber; i++) {
			ParallelTaskWorkerWrapper slave = new ParallelTaskWorkerWrapper(taskQueue);
			workers[i] = new Thread(slave);
			workers[i].start();
		}

		// Add tasks:
		Iterator<Entry<IK, IV>> it = input.entrySet().iterator();
		while (it.hasNext()) {
			Entry<IK, IV> pair = (Entry<IK, IV>) it.next();
			taskQueue.add(pair);
		}

		// All tasks added:
		allTasksAdded.set(true);

		// Wait for all workers:
		for (int i = 0; i < threadNumber; i++) {
			workers[i].join();
		}
	}

	private class ParallelTaskWorkerWrapper implements Runnable {
		private ConcurrentLinkedQueue<Entry<IK, IV>> taskQueue;

		public ParallelTaskWorkerWrapper(ConcurrentLinkedQueue<Entry<IK, IV>> taskQueue) {
			this.taskQueue = taskQueue;
		}

		@Override
		public void run() {
			while (true) {
				Entry<IK, IV> task = taskQueue.poll();

				if (task == null) {
					if (allTasksAdded.get()) {
						break;
					}
					continue;
				}

				worker.process(task.getKey(), task.getValue(), collector);
			}
		}
	}

	/**
	 * Get the output key-value pairs.
	 * 
	 * @return A map of the output key-value pairs.
	 */
	public Map<OK, OV> getOutput() {
		return collector.getResultMap();
	}
}
  ```
