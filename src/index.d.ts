// index.d.ts of [snippethub], at 210911
// All type defs should be here

import * as vscode from "vscode";

export interface Snippet {
  name: string;
  body: string[];
  description: string;
  prefix: string;
  scope: string[];
  key?: string;
  uri?: vscode.Uri;
}
