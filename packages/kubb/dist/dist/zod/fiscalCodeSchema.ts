import { z } from "zod";

 /**
 * @description User\'s fiscal code.
 */
export const fiscalCodeSchema = z.string().regex(new RegExp("^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$")).describe("User's fiscal code.");