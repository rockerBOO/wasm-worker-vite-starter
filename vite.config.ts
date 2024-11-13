import nodeResolve from "@rollup/plugin-node-resolve";
import react from "@vitejs/plugin-react";
import rollupTsConfigPaths from "rollup-plugin-tsconfig-paths";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react(), wasm(), topLevelAwait(), tsconfigPaths()],
	// assetsInclude: ["pkg/**"],
	test: {
		dir: "tests/",
		browser: {
			enabled: true,
			name: "chromium",
			provider: "playwright",
		},
	},
	build: {
		rollupOptions: { plugins: [rollupTsConfigPaths(), nodeResolve()] },
	},
});
