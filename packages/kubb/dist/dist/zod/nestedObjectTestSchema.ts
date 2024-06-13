import { z } from "zod";


export const nestedObjectTestSchema = z.object({ "inlineProp": z.string().regex(new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$")).describe("The device global unique identifier.").optional(), "nestedObject": z.object({ "inlineProp": z.string().regex(new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$")).describe("The device global unique identifier.").optional() }).optional() });