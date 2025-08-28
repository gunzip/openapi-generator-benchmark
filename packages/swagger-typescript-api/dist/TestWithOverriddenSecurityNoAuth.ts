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

export class TestWithOverriddenSecurityNoAuth<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * No description
 *
 * @name TestOverriddenSecurityNoAuth
 * @request GET:/test-with-overridden-security-no-auth
 * @response `200` `TestOverriddenSecurityNoAuthData` Ok
 */
testOverriddenSecurityNoAuth: (params: RequestParams = {}) =>
    this.request<TestOverriddenSecurityNoAuthData, any>({
        path: `/test-with-overridden-security-no-auth`,
        method: 'GET',
                                                ...params,
    }),    }
