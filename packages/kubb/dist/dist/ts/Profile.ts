import { EmailAddress } from "./EmailAddress";
import { FiscalCode } from "./FiscalCode";
import { IsInboxEnabled } from "./IsInboxEnabled";
import { IsWebhookEnabled } from "./IsWebhookEnabled";
import { PreferredLanguages } from "./PreferredLanguages";

 /**
 * @description Describes the user\'s profile.
*/
export type Profile = {
    email?: EmailAddress;
    /**
     * @type string
    */
    family_name: string;
    fiscal_code: FiscalCode;
    /**
     * @type boolean
    */
    has_profile: boolean;
    /**
     * @type boolean
    */
    is_email_set: boolean;
    is_inbox_enabled?: IsInboxEnabled;
    is_webhook_enabled?: IsWebhookEnabled;
    /**
     * @type string
    */
    name: string;
    preferred_email?: EmailAddress;
    preferred_languages?: PreferredLanguages;
    /**
     * @type integer
    */
    version: number;
    /**
     * @type object | undefined
    */
    payload?: {};
};