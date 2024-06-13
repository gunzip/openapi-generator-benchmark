import { z } from "zod";


export const enabledUserTestSchema = z.object({ "description": z.string(), "enabled": z.enum(["true"]), "username": z.string() });