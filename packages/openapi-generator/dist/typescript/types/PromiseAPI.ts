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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param newModel 
     */
    public putTestParameterWithBodyReferenceWithHttpInfo(newModel?: NewModel, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.putTestParameterWithBodyReferenceWithHttpInfo(newModel, _options);
        return result.toPromise();
    }

    /**
     * @param newModel 
     */
    public putTestParameterWithBodyReference(newModel?: NewModel, _options?: Configuration): Promise<void> {
        const result = this.api.putTestParameterWithBodyReference(newModel, _options);
        return result.toPromise();
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearerWithHttpInfo(qr: string, qo?: string, cursor?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testAuthBearerWithHttpInfo(qr, qo, cursor, _options);
        return result.toPromise();
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearer(qr: string, qo?: string, cursor?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testAuthBearer(qr, qo, cursor, _options);
        return result.toPromise();
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearerHttpWithHttpInfo(qr: string, qo?: string, cursor?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testAuthBearerHttpWithHttpInfo(qr, qo, cursor, _options);
        return result.toPromise();
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearerHttp(qr: string, qo?: string, cursor?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testAuthBearerHttp(qr, qo, cursor, _options);
        return result.toPromise();
    }

    /**
     */
    public testBinaryFileDownloadWithHttpInfo(_options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.testBinaryFileDownloadWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public testBinaryFileDownload(_options?: Configuration): Promise<HttpFile> {
        const result = this.api.testBinaryFileDownload(_options);
        return result.toPromise();
    }

    /**
     * @param file 
     */
    public testBinaryFileUploadWithHttpInfo(file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testBinaryFileUploadWithHttpInfo(file, _options);
        return result.toPromise();
    }

    /**
     * @param file 
     */
    public testBinaryFileUpload(file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.testBinaryFileUpload(file, _options);
        return result.toPromise();
    }

    /**
     */
    public testCustomTokenHeaderWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testCustomTokenHeaderWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public testCustomTokenHeader(_options?: Configuration): Promise<void> {
        const result = this.api.testCustomTokenHeader(_options);
        return result.toPromise();
    }

    /**
     */
    public testDatesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Person>> {
        const result = this.api.testDatesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public testDates(_options?: Configuration): Promise<Person> {
        const result = this.api.testDates(_options);
        return result.toPromise();
    }

    /**
     * @param file 
     */
    public testFileUploadWithHttpInfo(file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testFileUploadWithHttpInfo(file, _options);
        return result.toPromise();
    }

    /**
     * @param file 
     */
    public testFileUpload(file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.testFileUpload(file, _options);
        return result.toPromise();
    }

    /**
     * @param param 
     */
    public testHeaderOptionalWithHttpInfo(param?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testHeaderOptionalWithHttpInfo(param, _options);
        return result.toPromise();
    }

    /**
     * @param param 
     */
    public testHeaderOptional(param?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testHeaderOptional(param, _options);
        return result.toPromise();
    }

    /**
     * @param param 
     */
    public testHeaderWithSchemaRefWithHttpInfo(param: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testHeaderWithSchemaRefWithHttpInfo(param, _options);
        return result.toPromise();
    }

    /**
     * @param param 
     */
    public testHeaderWithSchemaRef(param: string, _options?: Configuration): Promise<void> {
        const result = this.api.testHeaderWithSchemaRef(param, _options);
        return result.toPromise();
    }

    /**
     */
    public testMultipleSuccessWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void | Message>> {
        const result = this.api.testMultipleSuccessWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public testMultipleSuccess(_options?: Configuration): Promise<void | Message> {
        const result = this.api.testMultipleSuccess(_options);
        return result.toPromise();
    }

    /**
     * @param param 
     */
    public testParamWithSchemaRefWithHttpInfo(param: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testParamWithSchemaRefWithHttpInfo(param, _options);
        return result.toPromise();
    }

    /**
     * @param param 
     */
    public testParamWithSchemaRef(param: string, _options?: Configuration): Promise<void> {
        const result = this.api.testParamWithSchemaRef(param, _options);
        return result.toPromise();
    }

    /**
     * @param newModel 
     */
    public testParameterWithBodyReferenceWithHttpInfo(newModel?: NewModel, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testParameterWithBodyReferenceWithHttpInfo(newModel, _options);
        return result.toPromise();
    }

    /**
     * @param newModel 
     */
    public testParameterWithBodyReference(newModel?: NewModel, _options?: Configuration): Promise<void> {
        const result = this.api.testParameterWithBodyReference(newModel, _options);
        return result.toPromise();
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDashWithHttpInfo(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testParameterWithDashWithHttpInfo(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options);
        return result.toPromise();
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDash(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testParameterWithDash(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options);
        return result.toPromise();
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDashAnUnderscoreWithHttpInfo(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testParameterWithDashAnUnderscoreWithHttpInfo(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options);
        return result.toPromise();
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDashAnUnderscore(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testParameterWithDashAnUnderscore(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options);
        return result.toPromise();
    }

    /**
     * @param requestId 
     */
    public testParameterWithReferenceWithHttpInfo(requestId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testParameterWithReferenceWithHttpInfo(requestId, _options);
        return result.toPromise();
    }

    /**
     * @param requestId 
     */
    public testParameterWithReference(requestId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testParameterWithReference(requestId, _options);
        return result.toPromise();
    }

    /**
     * when we declare parameters at path level
     * @param requestId 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testParametersAtPathLevelWithHttpInfo(requestId: string, cursor?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testParametersAtPathLevelWithHttpInfo(requestId, cursor, _options);
        return result.toPromise();
    }

    /**
     * when we declare parameters at path level
     * @param requestId 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testParametersAtPathLevel(requestId: string, cursor?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testParametersAtPathLevel(requestId, cursor, _options);
        return result.toPromise();
    }

    /**
     */
    public testResponseHeaderWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Message>> {
        const result = this.api.testResponseHeaderWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public testResponseHeader(_options?: Configuration): Promise<Message> {
        const result = this.api.testResponseHeader(_options);
        return result.toPromise();
    }

    /**
     * simply test of patch endpoint are considered
     */
    public testSimplePatchWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testSimplePatchWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * simply test of patch endpoint are considered
     */
    public testSimplePatch(_options?: Configuration): Promise<void> {
        const result = this.api.testSimplePatch(_options);
        return result.toPromise();
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testSimpleTokenWithHttpInfo(qr: string, qo?: string, cursor?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testSimpleTokenWithHttpInfo(qr, qo, cursor, _options);
        return result.toPromise();
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testSimpleToken(qr: string, qo?: string, cursor?: string, _options?: Configuration): Promise<void> {
        const result = this.api.testSimpleToken(qr, qo, cursor, _options);
        return result.toPromise();
    }

    /**
     */
    public testWithEmptyResponseWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testWithEmptyResponseWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public testWithEmptyResponse(_options?: Configuration): Promise<void> {
        const result = this.api.testWithEmptyResponse(_options);
        return result.toPromise();
    }

    /**
     * @param firstParam 
     * @param secondParam 
     */
    public testWithTwoParamsWithHttpInfo(firstParam: string, secondParam: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testWithTwoParamsWithHttpInfo(firstParam, secondParam, _options);
        return result.toPromise();
    }

    /**
     * @param firstParam 
     * @param secondParam 
     */
    public testWithTwoParams(firstParam: string, secondParam: string, _options?: Configuration): Promise<void> {
        const result = this.api.testWithTwoParams(firstParam, secondParam, _options);
        return result.toPromise();
    }


}



