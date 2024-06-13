import { z } from "zod";


export const additionalPropsTestSchema = z.object({}).catchall(z.array(z.number()));