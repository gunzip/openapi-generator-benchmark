import { z } from "zod";


export const oneOfTestSchema = z.union([z.object({ "limited": z.boolean().optional() }), z.object({ "unlimited": z.boolean().optional() })]);