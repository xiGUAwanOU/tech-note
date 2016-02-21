# Generic Multi-Thread Mapper

This is a generic multi-thread task runner (more specifically, mapper) convert the input key-value-pairs to output key-value-pairs. All threads are running locally.

The worker interface:

  ```java
public interface ParallelTaskWorker<IK, IV, OK, OV> {
	public void process(IK inputKey, IV inputValue, ParallelTaskCollector<OK, OV> collector);
}
  ```

And the output key-value-pair collector:

  ```java
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class ParallelTaskCollector<K, V> {
	private ConcurrentHashMap<K, V> resultMap;

	protected ParallelTaskCollector() {
		resultMap = new ConcurrentHashMap<K, V>();
	}

	public synchronized void collect(K key, V value) {
		resultMap.put(key, value);
	}

	protected Map<K, V> getResultMap() {
		return new HashMap<K, V>(resultMap);
	}
}
  ```

Finally, the task runner:

  ```java
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicBoolean;

public class ParallelTaskRunner<IK, IV, OK, OV> {
	private int threadNumber;
	private ParallelTaskCollector<OK, OV> collector;
	private Map<IK, IV> input;
	private ParallelTaskWorker<IK, IV, OK, OV> worker;
	private AtomicBoolean allTasksAdded;

	public ParallelTaskRunner(int threadNumber) {
		this.threadNumber = threadNumber;
		this.collector = new ParallelTaskCollector<OK, OV>();
		this.input = null;
		this.worker = null;
		this.allTasksAdded = new AtomicBoolean(false);
	}

	public void setInput(Map<IK, IV> input) {
		this.input = input;
	}

	public void setWorker(ParallelTaskWorker<IK, IV, OK, OV> worker) {
		this.worker = worker;
	}

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

	public Map<OK, OV> getOutput() {
		return collector.getResultMap();
	}
}
  ```
