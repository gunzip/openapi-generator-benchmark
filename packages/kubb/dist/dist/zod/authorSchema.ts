import { personSchema } from "./personSchema";
import { z } from "zod";


export const authorSchema = z.object({ "isDead": z.boolean().optional(), "info": z.lazy(() => personSchema).optional() });