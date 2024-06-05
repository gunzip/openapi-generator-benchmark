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

import { HttpFile } from '../http/http';

export class MessageContent {
    /**
    * The (optional) subject of the message - note that only some notification channels support the display of a subject. When a subject is not provided, one gets generated from the client attributes.
    */
    'subject'?: string;
    /**
    * The full version of the message, in plain text or Markdown format. The content of this field will be delivered to channels that don\'t have any limit in terms of content size (e.g. email, etc...).
    */
    'markdown': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "markdown",
            "baseName": "markdown",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MessageContent.attributeTypeMap;
    }

    public constructor() {
    }
}
