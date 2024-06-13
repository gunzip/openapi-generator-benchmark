import { z } from "zod";


export const objectDefinitionWithImplicitTypeSchema = z.object({ "prop_one": z.string().optional(), "prop_two": z.string().optional() });