import { createClient, createConfig } from "./dist/client";
import { testMultipleSuccess } from "./dist/sdk.gen";

export const client = createClient(
  createConfig({
    throwOnError: false,
  })
);

(async function () {
  const ret = await testMultipleSuccess({
    body: {
      id: "x",
      name: "heyapi",
    },
  });

  if (ret.request) {
    const request = ret.request;
  }

  if (ret.data) {
    const data = ret.data;
  }
})();
