import { Author } from "./Author";

 export type Book = {
    /**
     * @description title of the book
     * @type string | undefined
    */
    title?: string;
    author?: Author;
};