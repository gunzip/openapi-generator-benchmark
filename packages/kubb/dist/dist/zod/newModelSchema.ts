import { z } from "zod";


export const newModelSchema = z.object({ "id": z.string(), "name": z.string() });