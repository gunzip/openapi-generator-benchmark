import { definitionFieldWithDashSchema } from "./definitionFieldWithDashSchema";
import { z } from "zod";

 /**
 * @description a definition which is a list of references to other definitions.
 */
export const listOfReferencesSchema = z.array(z.lazy(() => definitionFieldWithDashSchema)).describe("a definition which is a list of references to other definitions.");