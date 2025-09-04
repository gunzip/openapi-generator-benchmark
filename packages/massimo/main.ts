import myClient from "./myclient/myclient.js";

(async function () {
  const client = await myClient({ url: "http://localhost/api/v1" });

  const ret = await client.testMultipleSuccess({
    body: {
      id: "123",
      name: "test",
    },
  });

  if (ret.statusCode == 200) {
    ret.body.name;
  }
})();

// (async function () {
//   const client = myClient("http://localhost/api/v1");

//   const ret = await client.testMultipleSuccess({
//     body: {
//       id: "123",
//       name: "test",
//     },
//   });

//   if (ret.statusCode == 200) {
//     ret.body.name;
//   }
// })();
