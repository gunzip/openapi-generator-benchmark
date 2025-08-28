import { createClient, createConfig } from "./dist/client";
import { testMultiContentTypes } from "./dist/sdk.gen";

export const client = createClient(createConfig());

const ret = await testMultiContentTypes({
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
