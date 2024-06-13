import { z } from "zod";


export const enumTrueTestSchema = z.object({ "flag": z.enum(["true"]).optional() });