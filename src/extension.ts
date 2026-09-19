// Skycaptain: VSCode "Open in Gitfox" Extension
//
// SPDX-License-Identifier: BSD-3-Clause
//
import * as fs from "node:fs";
import * as path from "node:path";
import findRoot from "find-root";
import open from "opn";
import * as vscode from "vscode";

async function askUserForPath(
  workspaceFolders: readonly vscode.WorkspaceFolder[],
): Promise<string | undefined> {
  const items = workspaceFolders.map((item) => item.name);

  const selected = await vscode.window.showQuickPick(items);

  if (selected) {
    return workspaceFolders.find((item) => item.name === selected)?.uri.fsPath;
  }

  return undefined;
}

function findGitRootPath(filepath: string): string {
  const startingPath = fs.lstatSync(filepath).isDirectory() ? filepath : path.dirname(filepath);

  return findRoot(startingPath, (dir) => fs.existsSync(path.resolve(dir, ".git")));
}

async function findActivePath(): Promise<string | undefined> {
  const activeTextEditor = vscode.window.activeTextEditor;
  const workspaceFolders = vscode.workspace.workspaceFolders;
  const file = activeTextEditor?.document.fileName;

  if (file && fs.existsSync(file)) {
    return file;
  } else if (workspaceFolders && workspaceFolders.length === 1) {
    return workspaceFolders[0].uri.fsPath;
  } else {
    return askUserForPath(workspaceFolders ?? []);
  }
}

function getAppName(): string {
  const platforms: Record<string, string> = {
    darwin: "Gitfox",
  };

  return platforms[process.platform] || "gitfox";
}

async function openInGitfox(): Promise<void> {
  try {
    const activePath = await findActivePath();

    if (!activePath) {
      return;
    }

    const gitPath = findGitRootPath(activePath);

    await open(gitPath, { app: getAppName() });
  } catch (err) {
    console.error(err);
  }
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("openInGitfox.open", openInGitfox);
  context.subscriptions.push(disposable);
}

export function deactivate() {}
