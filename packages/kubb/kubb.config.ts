import { defineConfig } from "@kubb/core";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";
import { pluginOas } from "@kubb/plugin-oas";

export default defineConfig(() => {
  return {
    root: ".",
    input: {
      path: "../../openapi/api.yaml",
    },
    output: {
      path: "./generated",
    },

    plugins: [
      pluginOas(),
      pluginTs({
        output: {
          path: "./types",
        },
      }),
      pluginZod({
        output: {
          path: "./zod",
        },
        group: {
          type: "tag",
          name({ group }) {
            return `${group}Controller`;
          },
        },
        typed: true,
        unknownType: "unknown",
        importPath: "zod",
      }),
    ],
  };
});
