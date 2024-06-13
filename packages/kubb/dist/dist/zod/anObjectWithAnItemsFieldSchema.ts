import { definitionFieldWithDashSchema } from "./definitionFieldWithDashSchema";
import { z } from "zod";

 /**
 * @description What if a object has a field named items?\nThe case is an object like { items: [] }, which is legal
 */
export const anObjectWithAnItemsFieldSchema = z.object({ "items": z.array(z.lazy(() => definitionFieldWithDashSchema)) }).describe("What if a object has a field named items?\nThe case is an object like { items: [] }, which is legal");