import { z } from "zod";


export const withinRangeExclusiveMaximumIntegerTestSchema = z.number().min(0).max(10);