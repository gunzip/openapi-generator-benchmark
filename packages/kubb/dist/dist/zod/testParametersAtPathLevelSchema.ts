import { z } from "zod";


export const testParametersAtPathLevelQueryParamsSchema = z.object({ "request-id": z.string(), "cursor": z.string().min(1).describe("An opaque identifier that points to the next item in the collection.").optional() });
/**
 * @description Ok
 */
export const testParametersAtPathLevel200Schema = z.any();
/**
 * @description Fatal error
 */
export const testParametersAtPathLevel500Schema = z.any();

 export const testParametersAtPathLevelQueryResponseSchema = z.any();