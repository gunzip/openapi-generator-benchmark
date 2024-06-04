import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AllOfTest } from '../models/AllOfTest';
import { AllOfWithOneElementTest } from '../models/AllOfWithOneElementTest';
import { AllOfWithOneRefElementTest } from '../models/AllOfWithOneRefElementTest';
import { AllOfWithXExtensibleEnum } from '../models/AllOfWithXExtensibleEnum';
import { AnObjectWithAnItemsField } from '../models/AnObjectWithAnItemsField';
import { AnObjectWithRefImport } from '../models/AnObjectWithRefImport';
import { Book } from '../models/Book';
import { BookAuthor } from '../models/BookAuthor';
import { BookAuthorInfo } from '../models/BookAuthorInfo';
import { ConstantIntegerTest } from '../models/ConstantIntegerTest';
import { DefinitionFieldWithDash } from '../models/DefinitionFieldWithDash';
import { DisabledUserTest } from '../models/DisabledUserTest';
import { DisjointUnionsUserTest } from '../models/DisjointUnionsUserTest';
import { EnabledUserTest } from '../models/EnabledUserTest';
import { EnumFalseTest } from '../models/EnumFalseTest';
import { EnumTest } from '../models/EnumTest';
import { EnumTrueTest } from '../models/EnumTrueTest';
import { InlinePropertyTest } from '../models/InlinePropertyTest';
import { ListOfDefinitionsInner } from '../models/ListOfDefinitionsInner';
import { Message } from '../models/Message';
import { MessageContent } from '../models/MessageContent';
import { NestedObjectTest } from '../models/NestedObjectTest';
import { NestedObjectTestNestedObject } from '../models/NestedObjectTestNestedObject';
import { NewModel } from '../models/NewModel';
import { ObjectDefinitionWithImplicitType } from '../models/ObjectDefinitionWithImplicitType';
import { OneOfTest } from '../models/OneOfTest';
import { OneOfTestOneOf } from '../models/OneOfTestOneOf';
import { OneOfTestOneOf1 } from '../models/OneOfTestOneOf1';
import { PaginationResponse } from '../models/PaginationResponse';
import { Person } from '../models/Person';
import { PersonAddress } from '../models/PersonAddress';
import { Profile } from '../models/Profile';
import { SimpleDefinition } from '../models/SimpleDefinition';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiPutTestParameterWithBodyReferenceRequest {
    /**
     * 
     * @type NewModel
     * @memberof DefaultApiputTestParameterWithBodyReference
     */
    newModel?: NewModel
}

export interface DefaultApiTestAuthBearerRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestAuthBearer
     */
    qr: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestAuthBearer
     */
    qo?: string
    /**
     * An opaque identifier that points to the next item in the collection.
     * @type string
     * @memberof DefaultApitestAuthBearer
     */
    cursor?: string
}

export interface DefaultApiTestAuthBearerHttpRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestAuthBearerHttp
     */
    qr: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestAuthBearerHttp
     */
    qo?: string
    /**
     * An opaque identifier that points to the next item in the collection.
     * @type string
     * @memberof DefaultApitestAuthBearerHttp
     */
    cursor?: string
}

export interface DefaultApiTestBinaryFileDownloadRequest {
}

export interface DefaultApiTestBinaryFileUploadRequest {
    /**
     * 
     * @type HttpFile
     * @memberof DefaultApitestBinaryFileUpload
     */
    file?: HttpFile
}

export interface DefaultApiTestCustomTokenHeaderRequest {
}

export interface DefaultApiTestDatesRequest {
}

export interface DefaultApiTestFileUploadRequest {
    /**
     * 
     * @type HttpFile
     * @memberof DefaultApitestFileUpload
     */
    file?: HttpFile
}

export interface DefaultApiTestHeaderOptionalRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestHeaderOptional
     */
    param?: string
}

export interface DefaultApiTestHeaderWithSchemaRefRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestHeaderWithSchemaRef
     */
    param: string
}

export interface DefaultApiTestMultipleSuccessRequest {
}

export interface DefaultApiTestParamWithSchemaRefRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestParamWithSchemaRef
     */
    param: string
}

export interface DefaultApiTestParameterWithBodyReferenceRequest {
    /**
     * 
     * @type NewModel
     * @memberof DefaultApitestParameterWithBodyReference
     */
    newModel?: NewModel
}

export interface DefaultApiTestParameterWithDashRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDash
     */
    pathParam: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDash
     */
    headerInlineParam: string
    /**
     * A header param which has dashes in it
     * @type string
     * @memberof DefaultApitestParameterWithDash
     */
    xHeaderParam: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDash
     */
    fooBar?: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDash
     */
    requestId?: string
}

export interface DefaultApiTestParameterWithDashAnUnderscoreRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDashAnUnderscore
     */
    pathParam: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDashAnUnderscore
     */
    headerInlineParam: string
    /**
     * A header param which has dashes in it
     * @type string
     * @memberof DefaultApitestParameterWithDashAnUnderscore
     */
    xHeaderParam: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDashAnUnderscore
     */
    fooBar?: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithDashAnUnderscore
     */
    requestId?: string
}

export interface DefaultApiTestParameterWithReferenceRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestParameterWithReference
     */
    requestId?: string
}

export interface DefaultApiTestParametersAtPathLevelRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestParametersAtPathLevel
     */
    requestId: string
    /**
     * An opaque identifier that points to the next item in the collection.
     * @type string
     * @memberof DefaultApitestParametersAtPathLevel
     */
    cursor?: string
}

export interface DefaultApiTestResponseHeaderRequest {
}

export interface DefaultApiTestSimplePatchRequest {
}

export interface DefaultApiTestSimpleTokenRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestSimpleToken
     */
    qr: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestSimpleToken
     */
    qo?: string
    /**
     * An opaque identifier that points to the next item in the collection.
     * @type string
     * @memberof DefaultApitestSimpleToken
     */
    cursor?: string
}

export interface DefaultApiTestWithEmptyResponseRequest {
}

export interface DefaultApiTestWithTwoParamsRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitestWithTwoParams
     */
    firstParam: string
    /**
     * 
     * @type string
     * @memberof DefaultApitestWithTwoParams
     */
    secondParam: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public putTestParameterWithBodyReferenceWithHttpInfo(param: DefaultApiPutTestParameterWithBodyReferenceRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.putTestParameterWithBodyReferenceWithHttpInfo(param.newModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putTestParameterWithBodyReference(param: DefaultApiPutTestParameterWithBodyReferenceRequest = {}, options?: Configuration): Promise<void> {
        return this.api.putTestParameterWithBodyReference(param.newModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testAuthBearerWithHttpInfo(param: DefaultApiTestAuthBearerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testAuthBearerWithHttpInfo(param.qr, param.qo, param.cursor,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testAuthBearer(param: DefaultApiTestAuthBearerRequest, options?: Configuration): Promise<void> {
        return this.api.testAuthBearer(param.qr, param.qo, param.cursor,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testAuthBearerHttpWithHttpInfo(param: DefaultApiTestAuthBearerHttpRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testAuthBearerHttpWithHttpInfo(param.qr, param.qo, param.cursor,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testAuthBearerHttp(param: DefaultApiTestAuthBearerHttpRequest, options?: Configuration): Promise<void> {
        return this.api.testAuthBearerHttp(param.qr, param.qo, param.cursor,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testBinaryFileDownloadWithHttpInfo(param: DefaultApiTestBinaryFileDownloadRequest = {}, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.testBinaryFileDownloadWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testBinaryFileDownload(param: DefaultApiTestBinaryFileDownloadRequest = {}, options?: Configuration): Promise<HttpFile> {
        return this.api.testBinaryFileDownload( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testBinaryFileUploadWithHttpInfo(param: DefaultApiTestBinaryFileUploadRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testBinaryFileUploadWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testBinaryFileUpload(param: DefaultApiTestBinaryFileUploadRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testBinaryFileUpload(param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testCustomTokenHeaderWithHttpInfo(param: DefaultApiTestCustomTokenHeaderRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testCustomTokenHeaderWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testCustomTokenHeader(param: DefaultApiTestCustomTokenHeaderRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testCustomTokenHeader( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testDatesWithHttpInfo(param: DefaultApiTestDatesRequest = {}, options?: Configuration): Promise<HttpInfo<Person>> {
        return this.api.testDatesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testDates(param: DefaultApiTestDatesRequest = {}, options?: Configuration): Promise<Person> {
        return this.api.testDates( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testFileUploadWithHttpInfo(param: DefaultApiTestFileUploadRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testFileUploadWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testFileUpload(param: DefaultApiTestFileUploadRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testFileUpload(param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testHeaderOptionalWithHttpInfo(param: DefaultApiTestHeaderOptionalRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testHeaderOptionalWithHttpInfo(param.param,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testHeaderOptional(param: DefaultApiTestHeaderOptionalRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testHeaderOptional(param.param,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testHeaderWithSchemaRefWithHttpInfo(param: DefaultApiTestHeaderWithSchemaRefRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testHeaderWithSchemaRefWithHttpInfo(param.param,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testHeaderWithSchemaRef(param: DefaultApiTestHeaderWithSchemaRefRequest, options?: Configuration): Promise<void> {
        return this.api.testHeaderWithSchemaRef(param.param,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testMultipleSuccessWithHttpInfo(param: DefaultApiTestMultipleSuccessRequest = {}, options?: Configuration): Promise<HttpInfo<void | Message>> {
        return this.api.testMultipleSuccessWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testMultipleSuccess(param: DefaultApiTestMultipleSuccessRequest = {}, options?: Configuration): Promise<void | Message> {
        return this.api.testMultipleSuccess( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParamWithSchemaRefWithHttpInfo(param: DefaultApiTestParamWithSchemaRefRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testParamWithSchemaRefWithHttpInfo(param.param,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParamWithSchemaRef(param: DefaultApiTestParamWithSchemaRefRequest, options?: Configuration): Promise<void> {
        return this.api.testParamWithSchemaRef(param.param,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithBodyReferenceWithHttpInfo(param: DefaultApiTestParameterWithBodyReferenceRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testParameterWithBodyReferenceWithHttpInfo(param.newModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithBodyReference(param: DefaultApiTestParameterWithBodyReferenceRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testParameterWithBodyReference(param.newModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithDashWithHttpInfo(param: DefaultApiTestParameterWithDashRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testParameterWithDashWithHttpInfo(param.pathParam, param.headerInlineParam, param.xHeaderParam, param.fooBar, param.requestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithDash(param: DefaultApiTestParameterWithDashRequest, options?: Configuration): Promise<void> {
        return this.api.testParameterWithDash(param.pathParam, param.headerInlineParam, param.xHeaderParam, param.fooBar, param.requestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithDashAnUnderscoreWithHttpInfo(param: DefaultApiTestParameterWithDashAnUnderscoreRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testParameterWithDashAnUnderscoreWithHttpInfo(param.pathParam, param.headerInlineParam, param.xHeaderParam, param.fooBar, param.requestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithDashAnUnderscore(param: DefaultApiTestParameterWithDashAnUnderscoreRequest, options?: Configuration): Promise<void> {
        return this.api.testParameterWithDashAnUnderscore(param.pathParam, param.headerInlineParam, param.xHeaderParam, param.fooBar, param.requestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithReferenceWithHttpInfo(param: DefaultApiTestParameterWithReferenceRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testParameterWithReferenceWithHttpInfo(param.requestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testParameterWithReference(param: DefaultApiTestParameterWithReferenceRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testParameterWithReference(param.requestId,  options).toPromise();
    }

    /**
     * when we declare parameters at path level
     * @param param the request object
     */
    public testParametersAtPathLevelWithHttpInfo(param: DefaultApiTestParametersAtPathLevelRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testParametersAtPathLevelWithHttpInfo(param.requestId, param.cursor,  options).toPromise();
    }

    /**
     * when we declare parameters at path level
     * @param param the request object
     */
    public testParametersAtPathLevel(param: DefaultApiTestParametersAtPathLevelRequest, options?: Configuration): Promise<void> {
        return this.api.testParametersAtPathLevel(param.requestId, param.cursor,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testResponseHeaderWithHttpInfo(param: DefaultApiTestResponseHeaderRequest = {}, options?: Configuration): Promise<HttpInfo<Message>> {
        return this.api.testResponseHeaderWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testResponseHeader(param: DefaultApiTestResponseHeaderRequest = {}, options?: Configuration): Promise<Message> {
        return this.api.testResponseHeader( options).toPromise();
    }

    /**
     * simply test of patch endpoint are considered
     * @param param the request object
     */
    public testSimplePatchWithHttpInfo(param: DefaultApiTestSimplePatchRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testSimplePatchWithHttpInfo( options).toPromise();
    }

    /**
     * simply test of patch endpoint are considered
     * @param param the request object
     */
    public testSimplePatch(param: DefaultApiTestSimplePatchRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testSimplePatch( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testSimpleTokenWithHttpInfo(param: DefaultApiTestSimpleTokenRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testSimpleTokenWithHttpInfo(param.qr, param.qo, param.cursor,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testSimpleToken(param: DefaultApiTestSimpleTokenRequest, options?: Configuration): Promise<void> {
        return this.api.testSimpleToken(param.qr, param.qo, param.cursor,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testWithEmptyResponseWithHttpInfo(param: DefaultApiTestWithEmptyResponseRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testWithEmptyResponseWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testWithEmptyResponse(param: DefaultApiTestWithEmptyResponseRequest = {}, options?: Configuration): Promise<void> {
        return this.api.testWithEmptyResponse( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testWithTwoParamsWithHttpInfo(param: DefaultApiTestWithTwoParamsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testWithTwoParamsWithHttpInfo(param.firstParam, param.secondParam,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testWithTwoParams(param: DefaultApiTestWithTwoParamsRequest, options?: Configuration): Promise<void> {
        return this.api.testWithTwoParams(param.firstParam, param.secondParam,  options).toPromise();
    }

}
