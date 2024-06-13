import { z } from "zod";
import { newModelSchema } from "./newModelSchema";

 /**
 * @description Created
 */
export const putTestParameterWithBodyReference201Schema = z.any();
/**
 * @description Fatal error
 */
export const putTestParameterWithBodyReference500Schema = z.any();

 export const putTestParameterWithBodyReferenceMutationRequestSchema = z.lazy(() => newModelSchema);

 export const putTestParameterWithBodyReferenceMutationResponseSchema = z.any();