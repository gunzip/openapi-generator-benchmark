import { z } from "zod";


export const withinRangeExclusiveMaximumNumberTestSchema = z.number().min(0).max(10);