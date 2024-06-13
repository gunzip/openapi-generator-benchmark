import { z } from "zod";

 /**
 * @description True if the recipient of a message wants to store its content for later retrieval.
 */
export const isInboxEnabledSchema = z.boolean().default(false).describe("True if the recipient of a message wants to store its content for later retrieval.");