import { z } from "zod";


export const constantIntegerTestSchema = z.union([z.literal(100)]);