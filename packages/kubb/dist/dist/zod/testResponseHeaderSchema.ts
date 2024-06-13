import { z } from "zod";
import { messageSchema } from "./messageSchema";

 /**
 * @description Will create a Message
 */
export const testResponseHeader201Schema = z.lazy(() => messageSchema);
/**
 * @description Fatal error
 */
export const testResponseHeader500Schema = z.any();
/**
 * @description Will create a Message
 */
export const testResponseHeaderQueryResponseSchema = z.lazy(() => messageSchema);