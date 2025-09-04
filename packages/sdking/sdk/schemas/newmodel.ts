import { z } from "zod";

export const NewModelSchema = z.object({
  id: z.string(),
  name: z.string().optional()
});

export type NewModel = z.infer<typeof NewModelSchema>;
