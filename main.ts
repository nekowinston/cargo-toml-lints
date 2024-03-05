#!/usr/bin/env -S deno run --allow-write=cargo-lints.schema.json
import clippyLints from "https://rust-lang.github.io/rust-clippy/master/lints.json" with {
  type: "json",
};

import { allLints } from "./rustclints.ts";

const lintLevels = ["allow", "warn", "deny", "forbid"];

const lintGroups: string[] = [];
Object.values(clippyLints).forEach((lint) => {
  if (!lintGroups.includes(lint.group)) {
    lintGroups.push(lint.group);
  }
});
lintGroups.sort();

const lints = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://json.schemastore.org/cargo-lints.json",
  title: "Cargo.toml",
  type: "object",
  definitions: {
    "LintLevel": {
      title: "Lint Level",
      anyOf: [
        {
          type: "string",
          enum: lintLevels,
        },
        {
          type: "object",
          properties: {
            level: {
              type: "string",
              enum: lintLevels,
            },
            priority: {
              type: "number",
            },
          },
          required: ["level"],
          additionalProperties: false,
        },
      ],
    },
  },
  properties: {
    rust: {
      title: "Rust Lints",
      type: "object",
      properties: allLints.reduce((acc, cur) => {
        acc[cur] = {
          $ref: "#/definitions/LintLevel",
        };
        return acc;
      }, {} as Record<string, unknown>),
    },
    clippy: {
      title: "Clippy Lints",
      type: "object",
      properties: Object.values(clippyLints).map((lint) => ({
        [lint.id]: {
          description: lint.docs,
          $ref: "#/definitions/LintLevel",
          "x-taplo": {
            "links": {
              "key":
                `https://rust-lang.github.io/rust-clippy/master/index.html#/${lint.id}`,
            },
          },
        },
      })).reduce((acc, cur) => ({ ...acc, ...cur }), {}),
    },
  },
  "x-taplo-info": {
    authors: ["nekowinston (https://github.com/nekowinston)"],
  },
};

Deno.writeTextFileSync(
  "cargo-lints.schema.json",
  JSON.stringify(lints, null, 2),
);
