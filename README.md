<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>list-workspace</h1>
  <a href="https://npmjs.com/package/list-workspace">
    <img alt="NPM" src="https://img.shields.io/npm/v/list-workspace.svg">
  </a>
  <a href="https://github.com/bconnorwhite/list-workspace">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/list-workspace.svg">
  </a>
</div>

<br />

<blockquote align="center">List all packages in a workspace, or all workspaces in a monorepo.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/list-workspace">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/list-workspace?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
npm install list-workspace
```

```sh
yarn add list-workspace
```

```sh
pnpm add list-workspace
```

```sh
bun add list-workspace
```

## Usage
```js
import {
  listWorkspaces,
  listWorkspacesPackageJSONs
  listWorkspace,
  listWorkspacePackageJSON
} from "which-pm-lockfile";

/**
 * List all workspace package directories in a monorepo.
 * 
 * Returns the absolute path to each workspace package directory.
 * Returns `undefined` if not in a monorepo.
 * 
 * Example: `["/path/to/packages/foo", "/path/to/packages/bar"]`
 */
const workspaces = await listWorkspaces();

/**
 * List all workspace package package.json files in a monorepo.
 * 
 * Returns the absolute path to each workspace package.json.
 * Returns `undefined` if not in a monorepo.
 * 
 * Example: `["/path/to/packages/foo/package.json", "/path/to/apps/bar/package.json"]`
 */
const workspacesPackageJSONs = await listWorkspacesPackageJSONs();

/**
 * List all package directories in a specific workspace within a monorepo.
 * 
 * Returns the absolute path to each workspace package directory.
 * Returns undefined if not in a monorepo, or if the workspace does not exist.
 * 
 * Example: ["/path/to/packages/foo/package"]
 */
const workspace = await listWorkspace("packages/*");

/**
 * List all package package.jsons in a specific workspace within a monorepo.
 * 
 * Returns the absolute path to each workspace package's package.json.
 * Returns undefined if not in a monorepo, or if the workspace does not exist.
 * 
 * Example: ["/path/to/packages/foo/package/package.json"]
 */
const workspacePackageJSONs= await listWorkspacePackageJSON("packages/*");
```
<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/list-workspace?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/list-workspace.svg"></a></h2>

- [globby](https://www.npmjs.com/package/globby): User-friendly glob matching
- [is-monorepo](https://www.npmjs.com/package/is-monorepo): Check if the working directory is in a monorepo.
- [package-run](https://www.npmjs.com/package/package-run): Node API for running package.json scripts. Supports yarn, npm, and pnpm.
- [workspace-root](https://www.npmjs.com/package/workspace-root): A simple utility to get the workspace root


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/list-workspace.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
