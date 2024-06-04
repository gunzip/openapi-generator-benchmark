/**
 * Test API
 * Test API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BookAuthorInfo } from './bookAuthorInfo';

export class BookAuthor {
    'isDead'?: boolean;
    'info'?: BookAuthorInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isDead",
            "baseName": "isDead",
            "type": "boolean"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "BookAuthorInfo"
        }    ];

    static getAttributeTypeMap() {
        return BookAuthor.attributeTypeMap;
    }
}

