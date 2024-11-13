import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import tsconfigPaths from "vite-tsconfig-paths";
import rollupTsConfigPaths from "rollup-plugin-tsconfig-paths";
import nodeResolve from "@rollup/plugin-node-resolve"

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
