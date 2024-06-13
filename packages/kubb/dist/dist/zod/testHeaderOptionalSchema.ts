import { z } from "zod";
import { customStringFormatTestSchema } from "./customStringFormatTestSchema";


export const testHeaderOptionalHeaderParamsSchema = z.object({ "param": z.lazy(() => customStringFormatTestSchema).optional() }).optional();
/**
 * @description Ok
 */
export const testHeaderOptional200Schema = z.any();

 export const testHeaderOptionalQueryResponseSchema = z.any();