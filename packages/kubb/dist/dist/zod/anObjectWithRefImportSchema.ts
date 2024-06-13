import { simpleDefinitionSchema } from "./simpleDefinitionSchema";
import { z } from "zod";

 /**
 * @description Describes an object with a ref import
 */
export const anObjectWithRefImportSchema = z.object({ "prop1": z.lazy(() => simpleDefinitionSchema) }).describe("Describes an object with a ref import");