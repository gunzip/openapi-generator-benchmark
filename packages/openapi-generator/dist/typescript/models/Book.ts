/**
 * Test API
 * Test API.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BookAuthor } from '../models/BookAuthor';
import { HttpFile } from '../http/http';

export class Book {
    /**
    * title of the book
    */
    'title'?: string;
    'author'?: BookAuthor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "BookAuthor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Book.attributeTypeMap;
    }

    public constructor() {
    }
}
