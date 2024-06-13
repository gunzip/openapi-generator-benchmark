import { z } from "zod";


export const withinRangeExclusiveMinimumIntegerTestSchema = z.number().min(0).max(10);