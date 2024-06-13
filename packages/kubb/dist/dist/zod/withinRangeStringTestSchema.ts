import { z } from "zod";


export const withinRangeStringTestSchema = z.string().min(8).max(10);