import { z } from "zod";


export const testAuthBearerQueryParamsSchema = z.object({ "qo": z.string().optional(), "qr": z.string(), "cursor": z.string().min(1).describe("An opaque identifier that points to the next item in the collection.").optional() });
/**
 * @description Will send `Authenticated`
 */
export const testAuthBearer200Schema = z.any();
/**
 * @description You do not have necessary permissions for the resource
 */
export const testAuthBearer403Schema = z.any();

 export const testAuthBearerQueryResponseSchema = z.any();