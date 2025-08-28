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

export class TestBinaryFileDownload<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * No description
 *
 * @name TestBinaryFileDownload
 * @request GET:/test-binary-file-download
 * @secure
 * @response `200` `TestBinaryFileDownloadData` Binary file download
 */
testBinaryFileDownload: (params: RequestParams = {}) =>
    this.request<TestBinaryFileDownloadData, any>({
        path: `/test-binary-file-download`,
        method: 'GET',
                        secure: true,                        ...params,
    }),    }
