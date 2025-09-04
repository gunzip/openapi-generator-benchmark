import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const NewModel = z
  .object({ id: z.string().min(1), name: z.string().optional() })
  .passthrough();
const Blob = z.object({ id: z.string() }).partial().passthrough();
const NewModelXml = z
  .object({ "id-xml": z.string().min(10), "name-xml": z.string().optional() })
  .passthrough();
const AnotherModel = z
  .object({ "id-another": z.string(), "name-another": z.string().optional() })
  .passthrough();

export const schemas = {
  NewModel,
  Blob,
  NewModelXml,
  AnotherModel,
};

const endpoints = makeApi([
  {
    method: "post",
    path: "/test-multiple-success",
    alias: "testMultipleSuccess",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: NewModel,
      },
    ],
    response: NewModel,
    errors: [
      {
        status: 403,
        description: `You do not have necessary permissions for the resource`,
        schema: z.object({ id: z.string() }).partial().passthrough(),
      },
      {
        status: 404,
        description: `Not found`,
        schema: z.void(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
