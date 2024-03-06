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
  title: "Cargo Manifest Lints",
  description: `#### The \`lints\` section

Override the default level of lints from different tools by assigning them to a new level in a
table, for example:
\`\`\`toml
[lints.rust]
unsafe_code = "forbid"
\`\`\`

This is short-hand for:
\`\`\`toml
[lints.rust]
unsafe_code = { level = "forbid", priority = 0 }
\`\`\`

\`level\` corresponds to the [lint levels](https://doc.rust-lang.org/rustc/lints/levels.html) in \`rustc\`:
- \`forbid\`
- \`deny\`
- \`warn\`
- \`allow\`

\`priority\` is a signed integer that controls which lints or lint groups override other lint groups:
- lower (particularly negative) numbers have lower priority, being overridden
  by higher numbers, and show up first on the command-line to tools like
  \`rustc\`

To know which table under \`[lints]\` a particular lint belongs under, it is the part before \`::\` in the lint
name.  If there isn't a \`::\`, then the tool is \`rust\`.  For example a warning
about \`unsafe_code\` would be \`lints.rust.unsafe_code\` but a lint about
\`clippy::enum_glob_use\` would be \`lints.clippy.enum_glob_use\`.

For example:
\`\`\`toml
[lints.rust]
unsafe_code = "forbid"

[lints.clippy]
enum_glob_use = "deny"
\`\`\`

Generally, these will only affect local development of the current package.
Cargo only applies these to the current package and not to dependencies.
As for dependents, Cargo suppresses lints from non-path dependencies with features like
[\`--cap-lints\`](../../rustc/lints/levels.html#capping-lints).`,
  type: "object",
  definitions: {
    "LintLevel": {
      title: "Lint Level",
      additionalProperties: false,
      anyOf: [
        {
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
    links: {
      key:
        "https://doc.rust-lang.org/cargo/reference/manifest.html#the-lints-section",
    },
    authors: ["nekowinston (https://github.com/nekowinston)"],
  },
};

Deno.writeTextFileSync(
  "partial-cargo-lints.schema.json",
  JSON.stringify(lints, null, 2),
);
