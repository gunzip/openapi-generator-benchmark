import { Address } from "./Address";

 export const personAge = {
    "20": 20,
    "40": 40,
    "50": 50
} as const;
export type PersonAge = (typeof personAge)[keyof typeof personAge];
export type Person = {
    /**
     * @description name of the person
     * @type string | undefined
    */
    name?: string;
    address?: Address;
    /**
     * @type string | undefined, date-time
    */
    birth?: string;
    /**
     * @type string | undefined, date
    */
    death?: string;
    /**
     * @type integer | undefined
    */
    age?: PersonAge;
    /**
     * @type string | undefined
    */
    zipCode?: string;
};