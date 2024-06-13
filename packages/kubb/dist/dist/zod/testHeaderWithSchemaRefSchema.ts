import { z } from "zod";
import { customStringFormatTestSchema } from "./customStringFormatTestSchema";


export const testHeaderWithSchemaRefHeaderParamsSchema = z.object({ "param": z.lazy(() => customStringFormatTestSchema) });
/**
 * @description Ok
 */
export const testHeaderWithSchemaRef200Schema = z.any();

 export const testHeaderWithSchemaRefQueryResponseSchema = z.any();