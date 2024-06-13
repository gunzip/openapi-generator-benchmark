import { z } from "zod";
import { customStringFormatTestSchema } from "./customStringFormatTestSchema";


export const testParamWithSchemaRefPathParamsSchema = z.object({ "param": z.lazy(() => customStringFormatTestSchema) });
/**
 * @description Ok
 */
export const testParamWithSchemaRef200Schema = z.any();

 export const testParamWithSchemaRefQueryResponseSchema = z.any();