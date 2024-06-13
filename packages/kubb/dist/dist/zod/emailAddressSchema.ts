import { z } from "zod";


export const emailAddressSchema = z.string().email();