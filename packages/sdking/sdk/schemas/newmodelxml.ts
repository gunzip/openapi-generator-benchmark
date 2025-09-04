import { z } from "zod";

export const NewModelXmlSchema = z.object({
  id-xml: z.string(),
  name-xml: z.string().optional()
});

export type NewModelXml = z.infer<typeof NewModelXmlSchema>;
