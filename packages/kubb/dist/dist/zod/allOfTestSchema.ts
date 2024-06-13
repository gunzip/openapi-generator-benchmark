import { messageSchema } from "./messageSchema";
import { paginationResponseSchema } from "./paginationResponseSchema";
import { z } from "zod";


export const allOfTestSchema = z.lazy(() => paginationResponseSchema).and(z.object({ "items": z.array(z.lazy(() => messageSchema)).optional() }));