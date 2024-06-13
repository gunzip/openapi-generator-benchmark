import { messageContentSchema } from "./messageContentSchema";
import { z } from "zod";


export const messageSchema = z.object({ "id": z.string(), "content": z.lazy(() => messageContentSchema), "sender_service_id": z.string().optional() });