import localVarRequest from 'request';

export * from './allOfTest';
export * from './allOfWithOneElementTest';
export * from './allOfWithOneRefElementTest';
export * from './allOfWithXExtensibleEnum';
export * from './anObjectWithAnItemsField';
export * from './anObjectWithRefImport';
export * from './book';
export * from './bookAuthor';
export * from './bookAuthorInfo';
export * from './constantIntegerTest';
export * from './definitionFieldWithDash';
export * from './disabledUserTest';
export * from './disjointUnionsUserTest';
export * from './enabledUserTest';
export * from './enumFalseTest';
export * from './enumTest';
export * from './enumTrueTest';
export * from './inlinePropertyTest';
export * from './listOfDefinitionsInner';
export * from './message';
export * from './messageContent';
export * from './nestedObjectTest';
export * from './nestedObjectTestNestedObject';
export * from './newModel';
export * from './objectDefinitionWithImplicitType';
export * from './oneOfTest';
export * from './oneOfTestOneOf';
export * from './oneOfTestOneOf1';
export * from './paginationResponse';
export * from './person';
export * from './personAddress';
export * from './profile';
export * from './simpleDefinition';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AllOfTest } from './allOfTest';
import { AllOfWithOneElementTest } from './allOfWithOneElementTest';
import { AllOfWithOneRefElementTest } from './allOfWithOneRefElementTest';
import { AllOfWithXExtensibleEnum } from './allOfWithXExtensibleEnum';
import { AnObjectWithAnItemsField } from './anObjectWithAnItemsField';
import { AnObjectWithRefImport } from './anObjectWithRefImport';
import { Book } from './book';
import { BookAuthor } from './bookAuthor';
import { BookAuthorInfo } from './bookAuthorInfo';
import { ConstantIntegerTest } from './constantIntegerTest';
import { DefinitionFieldWithDash } from './definitionFieldWithDash';
import { DisabledUserTest } from './disabledUserTest';
import { DisjointUnionsUserTest } from './disjointUnionsUserTest';
import { EnabledUserTest } from './enabledUserTest';
import { EnumFalseTest } from './enumFalseTest';
import { EnumTest } from './enumTest';
import { EnumTrueTest } from './enumTrueTest';
import { InlinePropertyTest } from './inlinePropertyTest';
import { ListOfDefinitionsInner } from './listOfDefinitionsInner';
import { Message } from './message';
import { MessageContent } from './messageContent';
import { NestedObjectTest } from './nestedObjectTest';
import { NestedObjectTestNestedObject } from './nestedObjectTestNestedObject';
import { NewModel } from './newModel';
import { ObjectDefinitionWithImplicitType } from './objectDefinitionWithImplicitType';
import { OneOfTest } from './oneOfTest';
import { OneOfTestOneOf } from './oneOfTestOneOf';
import { OneOfTestOneOf1 } from './oneOfTestOneOf1';
import { PaginationResponse } from './paginationResponse';
import { Person } from './person';
import { PersonAddress } from './personAddress';
import { Profile } from './profile';
import { SimpleDefinition } from './simpleDefinition';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ConstantIntegerTest": ConstantIntegerTest,
        "DisabledUserTest.EnabledEnum": DisabledUserTest.EnabledEnum,
        "DisjointUnionsUserTest.EnabledEnum": DisjointUnionsUserTest.EnabledEnum,
        "EnabledUserTest.EnabledEnum": EnabledUserTest.EnabledEnum,
        "EnumFalseTest.FlagEnum": EnumFalseTest.FlagEnum,
        "EnumTest.StatusEnum": EnumTest.StatusEnum,
        "EnumTrueTest.FlagEnum": EnumTrueTest.FlagEnum,
}

let typeMap: {[index: string]: any} = {
    "AllOfTest": AllOfTest,
    "AllOfWithOneElementTest": AllOfWithOneElementTest,
    "AllOfWithOneRefElementTest": AllOfWithOneRefElementTest,
    "AllOfWithXExtensibleEnum": AllOfWithXExtensibleEnum,
    "AnObjectWithAnItemsField": AnObjectWithAnItemsField,
    "AnObjectWithRefImport": AnObjectWithRefImport,
    "Book": Book,
    "BookAuthor": BookAuthor,
    "BookAuthorInfo": BookAuthorInfo,
    "DefinitionFieldWithDash": DefinitionFieldWithDash,
    "DisabledUserTest": DisabledUserTest,
    "DisjointUnionsUserTest": DisjointUnionsUserTest,
    "EnabledUserTest": EnabledUserTest,
    "EnumFalseTest": EnumFalseTest,
    "EnumTest": EnumTest,
    "EnumTrueTest": EnumTrueTest,
    "InlinePropertyTest": InlinePropertyTest,
    "ListOfDefinitionsInner": ListOfDefinitionsInner,
    "Message": Message,
    "MessageContent": MessageContent,
    "NestedObjectTest": NestedObjectTest,
    "NestedObjectTestNestedObject": NestedObjectTestNestedObject,
    "NewModel": NewModel,
    "ObjectDefinitionWithImplicitType": ObjectDefinitionWithImplicitType,
    "OneOfTest": OneOfTest,
    "OneOfTestOneOf": OneOfTestOneOf,
    "OneOfTestOneOf1": OneOfTestOneOf1,
    "PaginationResponse": PaginationResponse,
    "Person": Person,
    "PersonAddress": PersonAddress,
    "Profile": Profile,
    "SimpleDefinition": SimpleDefinition,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
