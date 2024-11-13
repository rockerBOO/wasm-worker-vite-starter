import ReactDOM from "react-dom/client";
import App from "app/App";
import workerUrl from "app/worker?worker&url";

// console.log('worker',worker)
import init, { startup }  from "pkg/wasm_worker_vite_starter";
// console.log('wasm',wasm)



async function run_wasm() {
	// Load the Wasm file by awaiting the Promise returned by `wasm_bindgen`
	// `wasm_bindgen` was imported in `index.html`
	await init();

	console.log("index.js loaded");

	// Run main Wasm entry point
	// This will create a worker from within our Rust code compiled to Wasm
	startup(workerUrl);

	const main = document.querySelector("main");

	if (!main) {
		console.error("Could not load the main element");
	} else {
		const root = ReactDOM.createRoot(main);

		root.render(<App name="World" />);
	}
}

run_wasm();
