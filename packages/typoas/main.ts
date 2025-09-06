import { testMultipleSuccess } from "./dist/client";

import { ServerConfiguration, ok } from "@typoas/runtime";
import { createContext } from "./dist/client";

const ctx = createContext();

(async function () {
  const r = await testMultipleSuccess(
    ctx,
    {},
    {
      id: "123",
      name: "Test",
    }
  );

  if (r.status === 200) {
    console.log("Success:", r.data);
  } else {
    console.error("Error:", r.error);
  }
})();
