/**
 * @description Pagination response parameters.
*/
export type PaginationResponse = {
    /**
     * @description Number of items returned for each page.
     * @type integer | undefined
    */
    page_size?: number;
    /**
     * @description Contains an URL to GET the next #<page_size> results in the retrieved collection of items.
     * @type string | undefined, uri
    */
    next?: string;
};