import { z } from "zod";


export const definitionFieldWithDashSchema = z.object({ "id-field": z.string().optional() });