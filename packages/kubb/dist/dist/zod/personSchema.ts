import { addressSchema } from "./addressSchema";
import { z } from "zod";


export const personSchema = z.object({ "name": z.string().describe("name of the person").optional(), "address": z.lazy(() => addressSchema).optional(), "birth": z.string().datetime().optional(), "death": z.string().date().optional(), "age": z.union([z.literal(20), z.literal(40), z.literal(50)]).optional(), "zipCode": z.string().regex(new RegExp("[0-9]+")).optional() });