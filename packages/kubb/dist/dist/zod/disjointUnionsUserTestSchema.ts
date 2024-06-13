import { enabledUserTestSchema } from "./enabledUserTestSchema";
import { disabledUserTestSchema } from "./disabledUserTestSchema";
import { z } from "zod";


export const disjointUnionsUserTestSchema = z.union([z.lazy(() => enabledUserTestSchema), z.lazy(() => disabledUserTestSchema)]);