import { z } from "zod";


export const withinRangeNumberTestSchema = z.number().min(0).max(10);