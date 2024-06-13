import { z } from "zod";


export const disabledUserTestSchema = z.object({ "enabled": z.enum(["false"]), "reason": z.string(), "username": z.string() });