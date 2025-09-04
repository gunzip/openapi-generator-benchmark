import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "../../openapi/multiple.yaml", // sign up at app.heyapi.dev
  output: "dist",
  plugins: [
    {
      name: "@hey-api/sdk",
      validator: "zod",
    },
  ],
});
