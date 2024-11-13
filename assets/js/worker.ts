import init, { NumberEval } from "pkg/wasm_worker_vite_starter";

console.log("Initializing worker");

async function init_wasm_in_worker() {
	await init();

	// Create a new object of the `NumberEval` struct.
	const num_eval = NumberEval.new();

	// Set callback to handle messages passed to the worker.
	self.onmessage = async (event) => {
		// By using methods of a struct as reaction to messages passed to the
		// worker, we can preserve our state between messages.
		const worker_result = num_eval.is_even(event.data);

		// Send response back to be handled by callback in main thread.
		self.postMessage(worker_result);
	};
}

init_wasm_in_worker();
