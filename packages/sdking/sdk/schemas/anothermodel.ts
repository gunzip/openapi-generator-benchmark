import { z } from "zod";

export const AnotherModelSchema = z.object({
  id-another: z.string(),
  name-another: z.string().optional()
});

export type AnotherModel = z.infer<typeof AnotherModelSchema>;
