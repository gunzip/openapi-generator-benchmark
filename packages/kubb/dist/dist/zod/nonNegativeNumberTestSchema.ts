import { z } from "zod";


export const nonNegativeNumberTestSchema = z.number().min(0);