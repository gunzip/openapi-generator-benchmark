import { createApiClient } from "./dist/client";

const api = createApiClient("http://localhost:3000");

async function run() {
  const ret = await api.post(
    "/test-multiple-success",
    {
      id: "123",
      name: "name",
      asdasd: "asdasd",
    },
    {
      headers: {
        Authorization: "Bearer token",
      },
    }
  );
  ret.id;
}

run().then(console.log).catch(console.error);
