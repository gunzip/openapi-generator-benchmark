import { z } from "zod";


export const nonNegativeIntegerTestSchema = z.number().min(0);