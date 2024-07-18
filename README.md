# eslint-config
> A *forked* ESLint [shareable configuration](https://github.com/Hazmi35/eslint-config) that we used in our projects.

<div align="center">
<a href="https://www.npmjs.com/package/@stegripe/eslint-config">
  <img src="https://img.shields.io/npm/v/@stegripe/eslint-config?maxAge=3600" alt="npm version" ></a>
  <img src="https://img.shields.io/npm/dt/@stegripe/eslint-config?maxAge=3600" alt="npm downloads">
</div>

## Install
```sh-session
npm install -D @stegripe/eslint-config # npm
pnpm add -D @stegripe/eslint-config # pnpm
yarn add -D @stegripe/eslint-config # yarn
```
This package has the required dependency installed automatically by peer dependencies by default on npm v7+, pnpm, or yarn. Install them manually if not.

## Usage
This package requires ESLint Flat Configuration.

Available configurations (most relevant):
- [common](./conf/common.js) - Common JavaScript rules.
- [typescript](./conf/typescript.js) - For usage with [TypeScript](https://www.typescriptlang.org).
- [modules](./conf/modules.js) - For usage with [ES Modules](https://nodejs.org/api/esm.html).
- [node](./conf/node.js) - For usage within a [Node.js](https://nodejs.org) or [Bun](https://bun.sh) environment.
- [prettier](./conf/prettier.js) - For code styling with [Prettier](https://prettier.io) (exclusive with ESLint Stylistic).
- [stylistic](./conf/stylistic.js) - For code styling with [ESLint Stylistic](https://eslint.style) (exclusive with Prettier).
- [browser](./conf/browser.js) - For usage within a browser environment (DOM and Web APIs).
- [edge](./conf/edge.js) - For usage within an edge/serverless environment. For example [Cloudflare Workers](https://workers.cloudflare.com/).
- [ignores](./conf/ignores.js) - To enable global ignores for ESLint. Needed for ESLint to ignore files that shouldn't be linted.

### Configuration
Create an `eslint.config.js` file in the root of your project and add the following code:

<details>
<summary>Node.js with CJS</summary>
<br>

```js
module.exports = (async () => {
    const { common, node, stylistic, ignores } = await import("@stegripe/eslint-config");

    return [...common, ...node, ...stylistic, ...ignores];
})();
```
</details>

<details>
<summary>Node.js with TypeScript</summary>
<br>

```js
import { common, modules, node, stylistic, typescript, ignores } from "@stegripe/eslint-config";

export default [...common, ...modules, ...node, ...stylistic, ...typescript, ...ignores];
```
</details>

<details>
<summary>Node.js with ESM</summary>
<br>

```js
import { common, modules, node, stylistic, ignores } from "@stegripe/eslint-config";

export default [...common, ...modules, ...node, ...stylistic, ...ignores];
``````
</details>

<details>
<summary>Usage with Prettier</summary>
<br>

```js
import { common, modules, node, prettier, ignores } from "@stegripe/eslint-config";

// Prettier must not be used with stylistic config, because it will conflict with each other.
export default [...common, ...modules, ...node, ...prettier, ...ignores];
```
</details>

<details>
<summary>Extending rules</summary>
<br>

Extending rules using the extend function is recommended.

```js
import { common, extend, modules, node, stylistic, typescript, ignores } from "./index.js";

export default [...common, ...modules, ...node, ...stylistic, ...ignores, ...extend(typescript, [{
    rule: "typescript/no-unnecessary-condition",
    option: [
        "warn",
        {
            allowConstantLoopConditions: false
        }
    ]
    // or
    option: ["off"]
}])];
```
</details>
