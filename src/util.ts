import * as vscode from "vscode";

export function isSnippetsFile(document: vscode.TextDocument) {
  //inspired from https://github.com/janisdd/vscode-edit-csv/blob/master/src/util.ts
  if (!document) return false;

  const langID = document.languageId.toLowerCase();
  const fileExt = document.fileName.split(".").pop();

  // console.log("document : ", document);
  console.log("fileExt : ", fileExt);

  const _isSnippetsFile =
    ["jsonc", "snippets", "code-snippets"].includes(langID) &&
    fileExt === "code-snippets" &&
    document.uri.scheme === "vscode-userdata"; // why "vscode-userdata" ?
  return _isSnippetsFile;
}
