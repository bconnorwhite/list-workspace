import path from "node:path";
import { globby } from "globby";
import { getMonorepoInfo } from "is-monorepo";

/**
 * Return a list of package directories within a given workspace
 */
async function list(root: string, workspace: string) {
  const glob = path.join(root, workspace);
  return globby(path.join(glob, "package.json"), {
    absolute: true,
    onlyFiles: true,
    cwd: root
  });
}

/**
 * List all package package.jsons in a specific workspace within a monorepo.
 * 
 * Returns the absolute path to each workspace package's package.json.
 * Returns undefined if not in a monorepo, or if the workspace does not exist.
 * 
 * Example: ["/path/to/packages/foo/package/package.json"]
 */
export async function listWorkspacePackageJSONs(name: string) {
  const info = await getMonorepoInfo();
  if(info) {
    const workspace = info.workspaces.find((workspace) => workspace === name);
    if(workspace) {
      return list(info.directory, workspace);
    }
  }
  return undefined;
}

/**
 * List all package directories in a specific workspace within a monorepo.
 * 
 * Returns the absolute path to each workspace package directory.
 * Returns undefined if not in a monorepo, or if the workspace does not exist.
 * 
 * Example: ["/path/to/packages/foo/package"]
 */
export async function listWorkspace(name: string) {
  const pkgJSONs = await listWorkspacePackageJSONs(name);
  return pkgJSONs?.map((file) => path.dirname(file));
}

/**
 * List all workspace package package.json files in a monorepo.
 * 
 * Returns the absolute path to each workspace package.json.
 * Returns `undefined` if not in a monorepo.
 * 
 * Example: `["/path/to/packages/foo/package.json", "/path/to/apps/bar/package.json"]`
 */
export async function listWorkspacesPackageJSONs() {
  const info = await getMonorepoInfo();
  if(info) {
    const lists = info.workspaces.map((workspace) => list(info.directory, workspace));
    return Promise.all(lists).then((all) => all.flat());
  }
  return undefined;
}

/**
 * List all workspace package directories in a monorepo.
 * 
 * Returns the absolute path to each workspace package directory.
 * Returns `undefined` if not in a monorepo.
 * 
 * Example: `["/path/to/packages/foo", "/path/to/packages/bar"]`
 */
export async function listWorkspaces() {
  const pkgJSONs = await listWorkspacesPackageJSONs();
  return pkgJSONs?.map((file) => path.dirname(file));
}
