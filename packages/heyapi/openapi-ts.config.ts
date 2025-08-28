import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "../../openapi/hard.yaml", // sign up at app.heyapi.dev
  output: "dist",
  plugins: [
    {
      name: "@hey-api/sdk",
      validator: "zod",
    },
  ],
});
