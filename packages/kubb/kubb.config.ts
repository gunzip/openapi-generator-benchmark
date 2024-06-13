import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/swagger-ts";
import { pluginZod } from "@kubb/swagger-zod";

export default defineConfig(() => {
  return {
    root: ".",
    input: {
      path: "../../openapi/api30.yaml",
    },
    output: {
      path: "./dist",
    },
    plugins: [
      pluginOas({
        output: {
          path: "./dist/oas",
        },
      }),
      pluginTs({
        output: {
          path: "./dist/ts",
        },
      }),
      pluginZod({
        output: {
          path: "./dist/zod",
        },
      }),
    ],
  };
});
