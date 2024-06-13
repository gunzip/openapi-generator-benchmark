import { z } from "zod";


export const withinRangeIntegerTestSchema = z.number().min(0).max(10);