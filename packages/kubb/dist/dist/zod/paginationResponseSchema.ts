import { z } from "zod";

 /**
 * @description Pagination response parameters.
 */
export const paginationResponseSchema = z.object({ "page_size": z.number().min(1).describe("Number of items returned for each page.").optional(), "next": z.string().url().describe("Contains an URL to GET the next #<page_size> results in the retrieved collection of items.").optional() }).describe("Pagination response parameters.");