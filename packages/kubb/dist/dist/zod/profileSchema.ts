import { emailAddressSchema } from "./emailAddressSchema";
import { fiscalCodeSchema } from "./fiscalCodeSchema";
import { isInboxEnabledSchema } from "./isInboxEnabledSchema";
import { isWebhookEnabledSchema } from "./isWebhookEnabledSchema";
import { preferredLanguagesSchema } from "./preferredLanguagesSchema";
import { z } from "zod";

 /**
 * @description Describes the user\'s profile.
 */
export const profileSchema = z.object({ "email": z.lazy(() => emailAddressSchema).optional(), "family_name": z.string(), "fiscal_code": z.lazy(() => fiscalCodeSchema), "has_profile": z.boolean(), "is_email_set": z.boolean(), "is_inbox_enabled": z.lazy(() => isInboxEnabledSchema).optional(), "is_webhook_enabled": z.lazy(() => isWebhookEnabledSchema).optional(), "name": z.string(), "preferred_email": z.lazy(() => emailAddressSchema).optional(), "preferred_languages": z.lazy(() => preferredLanguagesSchema).optional(), "version": z.number(), "payload": z.object({}).optional() }).describe("Describes the user's profile.");