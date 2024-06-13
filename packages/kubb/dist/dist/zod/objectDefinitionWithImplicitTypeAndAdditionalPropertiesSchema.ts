import { z } from "zod";


export const objectDefinitionWithImplicitTypeAndAdditionalPropertiesSchema = z.object({}).catchall(z.array(z.number()));