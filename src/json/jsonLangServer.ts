// THIS FILE IS NEVER USED.
// jsonLangServer.ts of [snippethub], at 210914
// adopted from https://github.com/microsoft/vscode/blob/main/src/vs/workbench/contrib/snippets/browser/snippets.contribution.ts
import { IJSONSchemaMap } from "vscode-json-schema";
import {
  getLanguageService,
  JSONSchema as IJSONSchema,
  SchemaRequestService,
  TextDocument,
  MatchingSchema,
} from "vscode-json-languageservice";

function initJSONServer() {
  const jsonSchemaUri = "vscode://schemas/global-snippets";

  const languageScopeSchemaId = "vscode://schemas/snippets";
  const snippetSchemaProperties: IJSONSchemaMap = {
    prefix: {
      description:
        "The prefix to use when selecting the snippet in intellisense",
      type: ["string", "array"],
    },
    body: {
      markdownDescription:
        "The snippet content. Use `$1`, `${1:defaultText}` to define cursor positions, use `$0` for the final cursor position. Insert variable values with `${varName}` and `${varName:defaultText}`, e.g. `This is file: $TM_FILENAME`.",
      type: ["string", "array"],
      items: {
        type: "string",
      },
    },
    description: {
      description: "The snippet description.",
      type: ["string", "array"],
    },
  };

  const globalSchemaId = "vscode://schemas/global-snippets";
  const globalSchema: IJSONSchema = {
    id: globalSchemaId,
    allowComments: true,
    allowTrailingCommas: true,
    defaultSnippets: [
      {
        label: "Empty snippet",
        body: {
          "${1:snippetName}": {
            scope: "${2:scope}",
            prefix: "${3:prefix}",
            body: "${4:snippet}",
            description: "${5:description}",
          },
        },
      },
    ],
    type: "object",
    description: "User snippet configuration",
    additionalProperties: {
      type: "object",
      required: ["body"],
      properties: {
        ...snippetSchemaProperties,
        scope: {
          description:
            "A list of language names to which this snippet applies, e.g. 'typescript,javascript'.",
          type: "string",
        },
      },
      additionalProperties: false,
    },
  };

  const jsonLanguageService = getLanguageService({
    schemaRequestService: (uri) => {
      if (uri === jsonSchemaUri) {
        return Promise.resolve(JSON.stringify(jsonSchemaUri));
      }
      return Promise.reject(`Unable to load schema at ${uri}`);
    },
  });
}
