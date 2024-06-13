import { z } from "zod";


export const withinRangeExclusiveMinMaxIntegerTestSchema = z.number().min(0).max(10);