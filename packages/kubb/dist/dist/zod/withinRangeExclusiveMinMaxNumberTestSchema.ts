import { z } from "zod";


export const withinRangeExclusiveMinMaxNumberTestSchema = z.number().min(0).max(10);