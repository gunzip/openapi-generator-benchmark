/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import type {
  Message,
  NewModel,
  OneOfTest,
  Person,
} from '../models/index';
import {
    MessageFromJSON,
    MessageToJSON,
    NewModelFromJSON,
    NewModelToJSON,
    OneOfTestFromJSON,
    OneOfTestToJSON,
    PersonFromJSON,
    PersonToJSON,
} from '../models/index';

export interface PutTestParameterWithBodyReferenceRequest {
    newModel?: NewModel;
}

export interface TestAuthBearerRequest {
    qr: string;
    qo?: string;
    cursor?: string;
}

export interface TestAuthBearerHttpRequest {
    qr: string;
    qo?: string;
    cursor?: string;
}

export interface TestBinaryFileUploadRequest {
    file?: Blob;
}

export interface TestFileUploadRequest {
    file?: Blob;
}

export interface TestHeaderOptionalRequest {
    param?: string;
}

export interface TestHeaderWithSchemaRefRequest {
    param: string;
}

export interface TestParamWithSchemaRefRequest {
    param: string;
}

export interface TestParameterWithBodyReferenceRequest {
    newModel?: NewModel;
}

export interface TestParameterWithDashRequest {
    pathParam: string;
    headerInlineParam: string;
    xHeaderParam: string;
    fooBar?: string;
    requestId?: string;
}

export interface TestParameterWithDashAnUnderscoreRequest {
    pathParam: string;
    headerInlineParam: string;
    xHeaderParam: string;
    fooBar?: string;
    requestId?: string;
}

export interface TestParameterWithReferenceRequest {
    requestId?: string;
}

export interface TestParametersAtPathLevelRequest {
    requestId: string;
    cursor?: string;
}

export interface TestSimpleTokenRequest {
    qr: string;
    qo?: string;
    cursor?: string;
}

export interface TestWithTwoParamsRequest {
    firstParam: string;
    secondParam: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async putTestParameterWithBodyReferenceRaw(requestParameters: PutTestParameterWithBodyReferenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/put-test-parameter-with-body-ref`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: NewModelToJSON(requestParameters['newModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async putTestParameterWithBodyReference(requestParameters: PutTestParameterWithBodyReferenceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putTestParameterWithBodyReferenceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testAuthBearerRaw(requestParameters: TestAuthBearerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['qr'] == null) {
            throw new runtime.RequiredError(
                'qr',
                'Required parameter "qr" was null or undefined when calling testAuthBearer().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['qo'] != null) {
            queryParameters['qo'] = requestParameters['qo'];
        }

        if (requestParameters['qr'] != null) {
            queryParameters['qr'] = requestParameters['qr'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // bearerToken authentication
        }

        const response = await this.request({
            path: `/test-auth-bearer`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testAuthBearer(requestParameters: TestAuthBearerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testAuthBearerRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testAuthBearerHttpRaw(requestParameters: TestAuthBearerHttpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['qr'] == null) {
            throw new runtime.RequiredError(
                'qr',
                'Required parameter "qr" was null or undefined when calling testAuthBearerHttp().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['qo'] != null) {
            queryParameters['qo'] = requestParameters['qo'];
        }

        if (requestParameters['qr'] != null) {
            queryParameters['qr'] = requestParameters['qr'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerTokenHttp", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/test-auth-bearer-http`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testAuthBearerHttp(requestParameters: TestAuthBearerHttpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testAuthBearerHttpRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testBinaryFileDownloadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-binary-file-download`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     */
    async testBinaryFileDownload(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.testBinaryFileDownloadRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async testBinaryFileUploadRaw(requestParameters: TestBinaryFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/test-binary-file-upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testBinaryFileUpload(requestParameters: TestBinaryFileUploadRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testBinaryFileUploadRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testCustomTokenHeaderRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["custom-token"] = await this.configuration.apiKey("custom-token"); // customToken authentication
        }

        const response = await this.request({
            path: `/test-custom-token-header`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testCustomTokenHeader(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testCustomTokenHeaderRaw(initOverrides);
    }

    /**
     */
    async testDatesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Person>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-dates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

    /**
     */
    async testDates(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Person> {
        const response = await this.testDatesRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async testFileUploadRaw(requestParameters: TestFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/test-file-upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testFileUpload(requestParameters: TestFileUploadRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testFileUploadRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testHeaderOptionalRaw(requestParameters: TestHeaderOptionalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['param'] != null) {
            headerParameters['param'] = String(requestParameters['param']);
        }

        const response = await this.request({
            path: `/test-header-optional`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testHeaderOptional(requestParameters: TestHeaderOptionalRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testHeaderOptionalRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testHeaderWithSchemaRefRaw(requestParameters: TestHeaderWithSchemaRefRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['param'] == null) {
            throw new runtime.RequiredError(
                'param',
                'Required parameter "param" was null or undefined when calling testHeaderWithSchemaRef().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['param'] != null) {
            headerParameters['param'] = String(requestParameters['param']);
        }

        const response = await this.request({
            path: `/test-header-with-schema-ref`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testHeaderWithSchemaRef(requestParameters: TestHeaderWithSchemaRefRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testHeaderWithSchemaRefRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testMultipleSuccessRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Message>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-multiple-success`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageFromJSON(jsonValue));
    }

    /**
     */
    async testMultipleSuccess(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Message | null | undefined > {
        const response = await this.testMultipleSuccessRaw(initOverrides);
        switch (response.raw.status) {
            case 200:
                return await response.value();
            case 202:
                return null;
            default:
                return await response.value();
        }
    }

    /**
     */
    async testParamWithSchemaRefRaw(requestParameters: TestParamWithSchemaRefRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['param'] == null) {
            throw new runtime.RequiredError(
                'param',
                'Required parameter "param" was null or undefined when calling testParamWithSchemaRef().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-param-with-schema-ref/{param}`.replace(`{${"param"}}`, encodeURIComponent(String(requestParameters['param']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testParamWithSchemaRef(requestParameters: TestParamWithSchemaRefRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testParamWithSchemaRefRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testParameterWithBodyReferenceRaw(requestParameters: TestParameterWithBodyReferenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/test-parameter-with-body-ref`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewModelToJSON(requestParameters['newModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testParameterWithBodyReference(requestParameters: TestParameterWithBodyReferenceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testParameterWithBodyReferenceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testParameterWithDashRaw(requestParameters: TestParameterWithDashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['pathParam'] == null) {
            throw new runtime.RequiredError(
                'pathParam',
                'Required parameter "pathParam" was null or undefined when calling testParameterWithDash().'
            );
        }

        if (requestParameters['headerInlineParam'] == null) {
            throw new runtime.RequiredError(
                'headerInlineParam',
                'Required parameter "headerInlineParam" was null or undefined when calling testParameterWithDash().'
            );
        }

        if (requestParameters['xHeaderParam'] == null) {
            throw new runtime.RequiredError(
                'xHeaderParam',
                'Required parameter "xHeaderParam" was null or undefined when calling testParameterWithDash().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fooBar'] != null) {
            queryParameters['foo-bar'] = requestParameters['fooBar'];
        }

        if (requestParameters['requestId'] != null) {
            queryParameters['request-id'] = requestParameters['requestId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['headerInlineParam'] != null) {
            headerParameters['headerInlineParam'] = String(requestParameters['headerInlineParam']);
        }

        if (requestParameters['xHeaderParam'] != null) {
            headerParameters['x-header-param'] = String(requestParameters['xHeaderParam']);
        }

        const response = await this.request({
            path: `/test-parameter-with-dash/{path-param}`.replace(`{${"path-param"}}`, encodeURIComponent(String(requestParameters['pathParam']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testParameterWithDash(requestParameters: TestParameterWithDashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testParameterWithDashRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testParameterWithDashAnUnderscoreRaw(requestParameters: TestParameterWithDashAnUnderscoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['pathParam'] == null) {
            throw new runtime.RequiredError(
                'pathParam',
                'Required parameter "pathParam" was null or undefined when calling testParameterWithDashAnUnderscore().'
            );
        }

        if (requestParameters['headerInlineParam'] == null) {
            throw new runtime.RequiredError(
                'headerInlineParam',
                'Required parameter "headerInlineParam" was null or undefined when calling testParameterWithDashAnUnderscore().'
            );
        }

        if (requestParameters['xHeaderParam'] == null) {
            throw new runtime.RequiredError(
                'xHeaderParam',
                'Required parameter "xHeaderParam" was null or undefined when calling testParameterWithDashAnUnderscore().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fooBar'] != null) {
            queryParameters['foo_bar'] = requestParameters['fooBar'];
        }

        if (requestParameters['requestId'] != null) {
            queryParameters['request-id'] = requestParameters['requestId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['headerInlineParam'] != null) {
            headerParameters['headerInlineParam'] = String(requestParameters['headerInlineParam']);
        }

        if (requestParameters['xHeaderParam'] != null) {
            headerParameters['x-header-param'] = String(requestParameters['xHeaderParam']);
        }

        const response = await this.request({
            path: `/test-parameter-with-dash-and_underscore/{path-param}`.replace(`{${"path-param"}}`, encodeURIComponent(String(requestParameters['pathParam']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testParameterWithDashAnUnderscore(requestParameters: TestParameterWithDashAnUnderscoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testParameterWithDashAnUnderscoreRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testParameterWithReferenceRaw(requestParameters: TestParameterWithReferenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters['requestId'] != null) {
            queryParameters['request-id'] = requestParameters['requestId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-parameter-with-reference`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testParameterWithReference(requestParameters: TestParameterWithReferenceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testParameterWithReferenceRaw(requestParameters, initOverrides);
    }

    /**
     * when we declare parameters at path level
     */
    async testParametersAtPathLevelRaw(requestParameters: TestParametersAtPathLevelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['requestId'] == null) {
            throw new runtime.RequiredError(
                'requestId',
                'Required parameter "requestId" was null or undefined when calling testParametersAtPathLevel().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['requestId'] != null) {
            queryParameters['request-id'] = requestParameters['requestId'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-path-level-parameter`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * when we declare parameters at path level
     */
    async testParametersAtPathLevel(requestParameters: TestParametersAtPathLevelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testParametersAtPathLevelRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testResponseHeaderRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Message>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-response-header`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageFromJSON(jsonValue));
    }

    /**
     */
    async testResponseHeader(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Message> {
        const response = await this.testResponseHeaderRaw(initOverrides);
        return await response.value();
    }

    /**
     * simply test of patch endpoint are considered
     */
    async testSimplePatchRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-simple`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * simply test of patch endpoint are considered
     */
    async testSimplePatch(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testSimplePatchRaw(initOverrides);
    }

    /**
     */
    async testSimpleTokenRaw(requestParameters: TestSimpleTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['qr'] == null) {
            throw new runtime.RequiredError(
                'qr',
                'Required parameter "qr" was null or undefined when calling testSimpleToken().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['qo'] != null) {
            queryParameters['qo'] = requestParameters['qo'];
        }

        if (requestParameters['qr'] != null) {
            queryParameters['qr'] = requestParameters['qr'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Functions-Key"] = await this.configuration.apiKey("X-Functions-Key"); // simpleToken authentication
        }

        const response = await this.request({
            path: `/test-simple-token`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testSimpleToken(requestParameters: TestSimpleTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testSimpleTokenRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testWithEmptyResponseRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-with-empty-response`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testWithEmptyResponse(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testWithEmptyResponseRaw(initOverrides);
    }

    /**
     */
    async testWithTwoParamsRaw(requestParameters: TestWithTwoParamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['firstParam'] == null) {
            throw new runtime.RequiredError(
                'firstParam',
                'Required parameter "firstParam" was null or undefined when calling testWithTwoParams().'
            );
        }

        if (requestParameters['secondParam'] == null) {
            throw new runtime.RequiredError(
                'secondParam',
                'Required parameter "secondParam" was null or undefined when calling testWithTwoParams().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/test-two-path-params/{first-param}/{second-param}`.replace(`{${"first-param"}}`, encodeURIComponent(String(requestParameters['firstParam']))).replace(`{${"second-param"}}`, encodeURIComponent(String(requestParameters['secondParam']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testWithTwoParams(requestParameters: TestWithTwoParamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testWithTwoParamsRaw(requestParameters, initOverrides);
    }

}