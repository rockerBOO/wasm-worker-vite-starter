# wasm-worker-vite-starter

[![Playwright Tests](https://github.com/rockerBOO/wasm-worker-vite-starter/actions/workflows/playwright.yaml/badge.svg)](https://github.com/rockerBOO/wasm-worker-vite-starter/actions/workflows/playwright.yaml)
[![.github/workflows/test.yaml](https://github.com/rockerBOO/wasm-worker-vite-starter/actions/workflows/test.yaml/badge.svg)](https://github.com/rockerBOO/wasm-worker-vite-starter/actions/workflows/test.yaml)
[![.github/workflows/wasm-bindgen-test.yaml](https://github.com/rockerBOO/wasm-worker-vite-starter/actions/workflows/wasm-bindgen-test.yaml/badge.svg)](https://github.com/rockerBOO/wasm-worker-vite-starter/actions/workflows/wasm-bindgen-test.yaml)

<!--toc:start-->
- [wasm-worker-vite-starter](#wasm-worker-vite-starter)
  - [Structure](#structure)
  - [Usage](#usage)
    - [Dev](#dev)
    - [Tests](#tests)
    - [Build](#build)
  - [Github actions](#github-actions)
  - [Thank you](#thank-you)
<!--toc:end-->

Need a WebWorker + Wasm (Wasm-Bindgen Rust) + React and like Vite?

Starter template for working with React + WasmBindgen + WebWorker

- React
- Vitest
- testing-library
- playwright
- typescript
- Wasm + Vite
- Web Worker example and setup

## Structure

- /assets/ # js/css/img that gets bundled
- /src/ # rust code
- /tests/ # unit/integration tests
- /e2e/ # e2e with playwright

## Usage

### Dev

```
$ yarn dev

  VITE v5.4.10  ready in 399 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Tests

Run unit/integration tests

```
$ yarn test

 DEV  v2.1.4 wasm-worker-vite-starter
      Browser runner started by playwright at http://localhost:63315/

 ✓ tests/App.spec.tsx (1)
   ✓ renders name

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  15:54:43
   Duration  1.56s (transform 0ms, setup 0ms, collect 60ms, tests 111ms, environment 0ms, prepare 216ms)
```

Playwright e2e tests

```
$ yarn e2e
Running 1 test using 1 worker
  1 passed (3.8s)
```

### Build

```
$ yarn build
vite v5.4.10 building for production...
✓ 34 modules transformed.
dist/index.html                                          0.51 kB │ gzip:  0.31 kB
dist/assets/worker-30J1Qqrf.js                           8.19 kB
dist/assets/wasm_worker_vite_starter_bg-Ub1HC4sI.wasm   25.92 kB
dist/assets/index-ejCtqbNh.css                           1.85 kB │ gzip:  0.82 kB
dist/assets/index-C3T0UCnM.js                          150.51 kB │ gzip: 48.70 kB
```

## Github actions

Setup Github actions for testing JS/TS/Wasm

- test
- wasm-bindgen-test
- e2e playwright
- dependbot

## Thank you

If you have any feedback to make this a better starter, let me know.
