#!/usr/bin/env -S deno run --allow-write=partial-cargo-lints.schema.json
import clippyLints from "https://rust-lang.github.io/rust-clippy/master/lints.json" with {
  type: "json",
};

import { allLints, lintLevelDocs, lintLevels } from "./rustclints.ts";

const lintGroups: string[] = [];
Object.values(clippyLints).forEach((lint) => {
  if (!lintGroups.includes(lint.group)) {
    lintGroups.push(lint.group);
  }
});
lintGroups.sort();

const lints = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://json.schemastore.org/cargo-lints.json",
  title: "Cargo.toml",
  type: "object",
  definitions: {
    "LintLevel": {
      title: "Lint Level",
      additionalProperties: false,
      anyOf: [
        {
          type: "string",
          enum: lintLevels,
          "x-taplo": {
            docs: {
              enumValues: lintLevelDocs,
            },
          },
        },
        {
          type: "object",
          additionalProperties: false,
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
        },
      ],
    },
  },
  properties: {
    rust: {
      title: "Rust Lints",
      type: "object",
      properties: allLints.reduce((acc, level) => {
        acc ??= {};
        acc[level] = {
          $ref: "#/definitions/LintLevel",
        };
        return acc;
      }, {} as Record<string, unknown>),
    },
    clippy: {
      title: "Clippy Lints",
      type: "object",
      properties: {
        ...Object.values(clippyLints).reduce((acc, lint) => {
          acc ??= {};
          acc[lint.id] = {
            $ref: "#/definitions/LintLevel",
            description: lint.docs,
            "x-taplo": {
              links: {
                key:
                  `https://rust-lang.github.io/rust-clippy/master/index.html#/${lint.id}`,
              },
            },
          };
          return acc;
        }, {} as Record<string, unknown>),
        ...lintGroups.reduce((acc, group) => {
          acc ??= {};
          acc[group] = {
            $ref: "#/definitions/LintLevel",
            "x-taplo": {
              links: {
                key:
                  `https://rust-lang.github.io/rust-clippy/master/index.html#?groups=${group}`,
              },
            },
          };
          return acc;
        }, {} as Record<string, unknown>),
      },
    },
  },
  "x-taplo-info": {
    authors: ["nekowinston (https://github.com/nekowinston)"],
  },
};

Deno.writeTextFileSync(
  "partial-cargo-lints.schema.json",
  JSON.stringify(lints, null, 2),
);
