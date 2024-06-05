module.exports = {
  generate: {
    output: {
      client: "zod",
      mode: "split",
      target: "./dist/client",
      schemas: "./dist/models",
    },
    input: {
      target: "../../openapi/api.yaml",
    },
  },
};
