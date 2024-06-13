import { z } from "zod";


export const testAuthBearerHttpQueryParamsSchema = z.object({ "qo": z.string().optional(), "qr": z.string(), "cursor": z.string().min(1).describe("An opaque identifier that points to the next item in the collection.").optional() });
/**
 * @description Will send `Authenticated`
 */
export const testAuthBearerHttp200Schema = z.any();
/**
 * @description You do not have necessary permissions for the resource
 */
export const testAuthBearerHttp403Schema = z.any();

 export const testAuthBearerHttpQueryResponseSchema = z.any();