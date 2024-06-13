import { z } from "zod";


export const withinRangeExclusiveMinimumNumberTestSchema = z.number().min(0).max(10);