import { z } from "zod";


export const enumFalseTestSchema = z.object({ "flag": z.enum(["false"]).optional() });