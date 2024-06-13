import { z } from "zod";

 /**
 * @description a definition which is a list of other definitions.
 */
export const listOfDefinitionsSchema = z.array(z.object({ "field": z.string().optional() })).describe("a definition which is a list of other definitions.");