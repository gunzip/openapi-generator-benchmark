import { ZipCode } from "./ZipCode";

 export type Address = {
    /**
     * @type string | undefined
    */
    location?: string;
    /**
     * @type string | undefined
    */
    city?: string;
    zipCode?: ZipCode;
};