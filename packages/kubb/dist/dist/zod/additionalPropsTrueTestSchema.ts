import { z } from "zod";


export const additionalPropsTrueTestSchema = z.object({}).catchall(z.any());