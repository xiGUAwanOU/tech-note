# Multi-Threading and Lock

A simple example should be like this:

  ```ruby
mutex = Mutex.new
for i in 1 .. 10
	t = Thread.new(i) { |number|
		mutex.synchronize {
			puts "Start thread #{number}."
			puts "Thread #{number} finished."
		}
	}
	t.abort_on_exception = true
	threads << t
end

for t in threads
	t.join
end
  ```
