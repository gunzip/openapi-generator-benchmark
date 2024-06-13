import { z } from "zod";

 /**
 * @description test if we can use allOf with just one element inside
 */
export const allOfWithOneElementTestSchema = z.object({ "key": z.string().optional() }).describe("test if we can use allOf with just one element inside");