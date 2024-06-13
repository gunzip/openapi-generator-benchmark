import { profileSchema } from "./profileSchema";
import { z } from "zod";

 /**
 * @description test if allOf with x-extensible-enum works fine
 */
export const allOfWithXExtensibleEnumSchema = z.lazy(() => profileSchema).and(z.object({ "status": z.string() })).describe("test if allOf with x-extensible-enum works fine");