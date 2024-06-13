import { z } from "zod";


export const testParameterWithReferenceQueryParamsSchema = z.object({ "request-id": z.string().optional() }).optional();
/**
 * @description Created
 */
export const testParameterWithReference201Schema = z.any();
/**
 * @description Fatal error
 */
export const testParameterWithReference500Schema = z.any();

 export const testParameterWithReferenceMutationResponseSchema = z.any();