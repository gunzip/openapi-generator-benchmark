import { z } from "zod";


export const additionalpropsDefaultSchema = z.object({}).catchall(z.array(z.number()));