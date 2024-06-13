import { profileSchema } from "./profileSchema";
import { z } from "zod";

 /**
 * @description test if we can use allOf with just ref one element inside
 */
export const allOfWithOneRefElementTestSchema = z.lazy(() => profileSchema).describe("test if we can use allOf with just ref one element inside");