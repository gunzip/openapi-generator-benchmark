import { z } from "zod";

 /**
 * @description True if the recipient of a message wants to forward the notifications to the default webhook.
 */
export const isWebhookEnabledSchema = z.boolean().default(false).describe("True if the recipient of a message wants to forward the notifications to the default webhook.");