import { z } from "zod";
import { newModelSchema } from "./newModelSchema";

 /**
 * @description Created
 */
export const testParameterWithBodyReference201Schema = z.any();
/**
 * @description Fatal error
 */
export const testParameterWithBodyReference500Schema = z.any();

 export const testParameterWithBodyReferenceMutationRequestSchema = z.lazy(() => newModelSchema);

 export const testParameterWithBodyReferenceMutationResponseSchema = z.any();