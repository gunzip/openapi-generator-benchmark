import { z } from "zod";


export const enumTestSchema = z.object({ "status": z.enum(["value1", "value2", "value3"]).optional() });