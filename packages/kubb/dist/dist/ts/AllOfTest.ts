import { Message } from "./Message";
import { PaginationResponse } from "./PaginationResponse";

 export type AllOfTest = ({
    /**
     * @type array | undefined
    */
    items?: Message[];
} & PaginationResponse);