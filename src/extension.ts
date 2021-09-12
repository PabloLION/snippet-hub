import * as vscode from "vscode";
import { isSnippetsFile } from "./util";

export function activate(context: vscode.ExtensionContext) {
  startUpGreeting();
  registerCommands(context);
}
export function deactivate() {}

type SnippetHubCommandName =
  | "helloWorld"
  | "shareSelected"
  | "saveSelected"
  | "enhanceSnippetEditor"
  | "previewSnippet";
/* real content */
const snippethub_commands: {
  [cmdName in SnippetHubCommandName]: (param: any) => any;
} = {
  helloWorld: () => {
    vscode.window.showInformationMessage("Hello World from Snippet Hub!");
  },
  saveSelected: () => {
    vscode.window.showInformationMessage("Command Unavailable right now");
  },
  shareSelected: () => {
    vscode.window.showInformationMessage("Command Unavailable right now");
  },
  previewSnippet: () => {
    vscode.window.showInformationMessage("Command Unavailable right now");
  },
  enhanceSnippetEditor: () => {
    const editor = vscode.window.activeTextEditor ?? null;
    if (editor === null) {
      return vscode.window.showErrorMessage("No active editor.");
    }
    isSnippetsFile(editor.document);
    vscode.window.showInformationMessage("");
  },
};

function startUpGreeting() {
  console.log('Congratulations, your extension "snippethub" is now active!');
}

function registerCommands(context: vscode.ExtensionContext) {
  const toRegister = Object.entries(snippethub_commands).map(
    ([cmdName, func]) => {
      return vscode.commands.registerCommand(`snippethub.${cmdName}`, func);
    }
  );

  context.subscriptions.push(...toRegister);
  ``;
}
