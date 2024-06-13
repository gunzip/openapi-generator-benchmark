import { z } from "zod";

 /**
 * @description File uploaded
 */
export const testBinaryFileUpload200Schema = z.any();

 export const testBinaryFileUploadMutationRequestSchema = z.object({ "file": z.string().optional() });

 export const testBinaryFileUploadMutationResponseSchema = z.any();