import * as vscode from "vscode";
import { isSnippetsFile } from "./util";

export function activate(context: vscode.ExtensionContext) {
  startUpGreeting();
  registerCommands(context);
  registerFormatter();
}
export function deactivate() {}

type SnippetHubCommandName =
  | "helloWorld"
  | "shareSelected"
  | "saveSelected"
  | "enhanceSnippetEditor"
  | "previewSnippet"
  | "formatSnippet";
/* real content */
const snippethub_commands: {
  [cmdName in SnippetHubCommandName]: (param: any) => any;
} = {
  helloWorld: () => {
    return vscode.window.showInformationMessage(
      "Hello World from Snippet Hub!"
    );
  },
  saveSelected: () => {
    return vscode.window.showInformationMessage(
      "Command Unavailable right now"
    );
  },
  shareSelected: () => {
    return vscode.window.showInformationMessage(
      "Command Unavailable right now"
    );
  },
  previewSnippet: () => {
    return vscode.window.showInformationMessage(
      "Command Unavailable right now"
    );
  },
  enhanceSnippetEditor: () => {
    const editor = vscode.window.activeTextEditor ?? null;
    if (editor === null) {
      return vscode.window.showErrorMessage("No active editor.");
    }
    isSnippetsFile(editor.document);
    return vscode.window.showInformationMessage("");
  },
  formatSnippet: () => {
    return vscode.window.showInformationMessage(
      "Please use registerDocumentFormattingEditProvider."
    );
  },
};

function startUpGreeting() {
  console.log('Congratulations, your extension "snippethub" is now active!');
}

function registerCommands(context: vscode.ExtensionContext) {
  const disposables = Object.entries(snippethub_commands).map(
    ([cmdName, func]) => {
      return vscode.commands.registerCommand(`snippethub.${cmdName}`, func);
    }
  );

  context.subscriptions.push(...disposables);
  ``;
}

function registerFormatter() {
  console.log("formatter registering");
  vscode.languages.registerDocumentFormattingEditProvider("snippet", {
    provideDocumentFormattingEdits(
      document: vscode.TextDocument
    ): vscode.TextEdit[] {
      const firstLine = document.lineAt(0);
      {
        return [
          vscode.TextEdit.insert(
            firstLine.range.start,
            "// this is snippet lang \n"
          ),
        ];
      }
    },
  });
  console.log("formatter registered");
}
