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
import { PersonAddress } from './personAddress';

export class BookAuthorInfo {
    /**
    * name of the person
    */
    'name'?: string;
    'address'?: PersonAddress;
    'birth'?: Date;
    'death'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "PersonAddress"
        },
        {
            "name": "birth",
            "baseName": "birth",
            "type": "Date"
        },
        {
            "name": "death",
            "baseName": "death",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BookAuthorInfo.attributeTypeMap;
    }
}

