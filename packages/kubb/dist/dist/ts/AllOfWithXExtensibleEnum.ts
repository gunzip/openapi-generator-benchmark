import { Profile } from "./Profile";

 /**
 * @description test if allOf with x-extensible-enum works fine
*/
export type AllOfWithXExtensibleEnum = (Profile & {
    /**
     * @type string
    */
    status: string;
});