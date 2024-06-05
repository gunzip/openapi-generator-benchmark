import createClient from "openapi-fetch";
import type { paths } from "./dist/schema";

const client = createClient<paths>({ baseUrl: "https:/example.com" });

(async () => {
  const {
    data, // only present if 2XX response
    error, // only present if 4XX or 5XX response
  } = await client.GET("/blogposts/{post_id}", {
    params: {
      path: { post_id: "123" },
    },
  });

  await client.PUT("/blogposts", {
    body: {
      title: "My New Post",
    },
  });
})();
