import { z } from "zod";

 /**
 * @description File uploaded
 */
export const testFileUpload200Schema = z.any();

 export const testFileUploadMutationRequestSchema = z.object({ "file": z.string().optional() });

 export const testFileUploadMutationResponseSchema = z.any();