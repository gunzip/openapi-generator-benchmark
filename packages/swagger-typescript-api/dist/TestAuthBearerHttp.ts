/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */


 import type { AxiosRequestConfig, AxiosResponse } from "axios"; 
import { HttpClient, RequestParams, ContentType, HttpResponse } from "./http-client";
import { ConstantIntegerTest, Person, Book, FiscalCode, EmailAddress, IsInboxEnabled, IsWebhookEnabled, Profile, SimpleDefinition, DefinitionFieldWithDash, MessageSubject, MessageBodyMarkdown, MessageContent, Message, NewModel, PaginationResponse, OneOfTest, AllOfWithOneElementTest, AllOfWithOneRefElementTest, AllOfWithXExtensibleEnum, AllOfTest, PreferredLanguage, PreferredLanguages, AnObjectWithAnItemsField, AnObjectWithRefImport, TestDeserUser, WithinRangeStringTest, NonNegativeNumberTest, NonNegativeIntegerTest, WithinRangeIntegerTest, WithinRangeNumberTest, WithinRangeExclusiveMaximumIntegerTest, WithinRangeExclusiveMinimumIntegerTest, WithinRangeExclusiveMinimumNumberTest, WithinRangeExclusiveMinMaxIntegerTest, WithinRangeExclusiveMinMaxNumberTest, WithinRangeExclusiveMaximumNumberTest, CustomStringFormatTest, EnumTest, AdditionalPropsTest, AdditionalPropsTrueTest, AdditionalpropsDefault, InlinePropertyTest, NestedObjectTest, OrganizationFiscalCode, OrganizationFiscalCodeTest, ListOfDefinitions, ListOfReferences, EnabledUserTest, DisabledUserTest, DisjointUnionsUserTest, EnumTrueTest, EnumFalseTest, ObjectDefinitionWithImplicitType, ObjectDefinitionWithImplicitTypeAndAdditionalProperties, ProblemDetails, NotFound, TestAuthBearerParams, TestAuthBearerData, TestAuthBearerHttpParams, TestAuthBearerHttpData, TestAuthBearerHttpError, TestSimpleTokenParams, TestSimpleTokenData, TestMultipleSuccessData, TestMultipleSuccessError, TestFileUploadPayload, TestFileUploadData, TestBinaryFileUploadPayload, TestBinaryFileUploadData, TestBinaryFileDownloadData, TestResponseHeaderData, TestParameterWithReferenceParams, TestParameterWithReferenceData, TestInlineBodySchemaPayload, TestInlineBodySchemaData, TestParameterWithBodyReferenceData, PutTestParameterWithBodyReferenceData, TestParameterWithDashParams, TestParameterWithDashData, TestParameterWithDashAnUnderscoreParams, TestParameterWithDashAnUnderscoreData, TestWithTwoParamsData, TestParametersAtPathLevelParams, TestParametersAtPathLevelData, TestSimplePatchData, TestCustomTokenHeaderData, TestParamWithSchemaRefData, TestHeaderWithSchemaRefData, TestHeaderOptionalData, TestOverriddenSecurityData, TestOverriddenSecurityNoAuthData, TestMultiContentTypesData, TestDeserializationData, EnumTestStatusEnum, EnabledUserTestEnabledEnum, DisabledUserTestEnabledEnum, EnumTrueTestFlagEnum, EnumFalseTestFlagEnum } from "./data-contracts"

export class TestAuthBearerHttp<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * No description
 *
 * @name TestAuthBearerHttp
 * @request GET:/test-auth-bearer-http
 * @secure
 * @response `200` `TestAuthBearerHttpData` Will send `Authenticated`
 * @response `403` `void` You do not have necessary permissions for the resource
 * @response `503` `{
    "prop1": SimpleDefinition,
    "prop2"?: string,

}` Another failure.
 * @response `504` `ProblemDetails` Failure.
 */
testAuthBearerHttp: (query: TestAuthBearerHttpParams, params: RequestParams = {}) =>
    this.request<TestAuthBearerHttpData, TestAuthBearerHttpError>({
        path: `/test-auth-bearer-http`,
        method: 'GET',
        query: query,                secure: true,                        ...params,
    }),    }
