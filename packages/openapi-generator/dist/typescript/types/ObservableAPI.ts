import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * @param newModel 
     */
    public putTestParameterWithBodyReferenceWithHttpInfo(newModel?: NewModel, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.putTestParameterWithBodyReference(newModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putTestParameterWithBodyReferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param newModel 
     */
    public putTestParameterWithBodyReference(newModel?: NewModel, _options?: Configuration): Observable<void> {
        return this.putTestParameterWithBodyReferenceWithHttpInfo(newModel, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearerWithHttpInfo(qr: string, qo?: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testAuthBearer(qr, qo, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testAuthBearerWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearer(qr: string, qo?: string, cursor?: string, _options?: Configuration): Observable<void> {
        return this.testAuthBearerWithHttpInfo(qr, qo, cursor, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearerHttpWithHttpInfo(qr: string, qo?: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testAuthBearerHttp(qr, qo, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testAuthBearerHttpWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testAuthBearerHttp(qr: string, qo?: string, cursor?: string, _options?: Configuration): Observable<void> {
        return this.testAuthBearerHttpWithHttpInfo(qr, qo, cursor, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public testBinaryFileDownloadWithHttpInfo(_options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.testBinaryFileDownload(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testBinaryFileDownloadWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public testBinaryFileDownload(_options?: Configuration): Observable<HttpFile> {
        return this.testBinaryFileDownloadWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * @param file 
     */
    public testBinaryFileUploadWithHttpInfo(file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testBinaryFileUpload(file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testBinaryFileUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param file 
     */
    public testBinaryFileUpload(file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.testBinaryFileUploadWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public testCustomTokenHeaderWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testCustomTokenHeader(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testCustomTokenHeaderWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public testCustomTokenHeader(_options?: Configuration): Observable<void> {
        return this.testCustomTokenHeaderWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public testDatesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Person>> {
        const requestContextPromise = this.requestFactory.testDates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testDatesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public testDates(_options?: Configuration): Observable<Person> {
        return this.testDatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Person>) => apiResponse.data));
    }

    /**
     * @param file 
     */
    public testFileUploadWithHttpInfo(file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testFileUpload(file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testFileUploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param file 
     */
    public testFileUpload(file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.testFileUploadWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param param 
     */
    public testHeaderOptionalWithHttpInfo(param?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testHeaderOptional(param, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testHeaderOptionalWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param param 
     */
    public testHeaderOptional(param?: string, _options?: Configuration): Observable<void> {
        return this.testHeaderOptionalWithHttpInfo(param, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param param 
     */
    public testHeaderWithSchemaRefWithHttpInfo(param: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testHeaderWithSchemaRef(param, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testHeaderWithSchemaRefWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param param 
     */
    public testHeaderWithSchemaRef(param: string, _options?: Configuration): Observable<void> {
        return this.testHeaderWithSchemaRefWithHttpInfo(param, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public testMultipleSuccessWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void | Message>> {
        const requestContextPromise = this.requestFactory.testMultipleSuccess(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testMultipleSuccessWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public testMultipleSuccess(_options?: Configuration): Observable<void | Message> {
        return this.testMultipleSuccessWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void | Message>) => apiResponse.data));
    }

    /**
     * @param param 
     */
    public testParamWithSchemaRefWithHttpInfo(param: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testParamWithSchemaRef(param, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testParamWithSchemaRefWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param param 
     */
    public testParamWithSchemaRef(param: string, _options?: Configuration): Observable<void> {
        return this.testParamWithSchemaRefWithHttpInfo(param, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param newModel 
     */
    public testParameterWithBodyReferenceWithHttpInfo(newModel?: NewModel, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testParameterWithBodyReference(newModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testParameterWithBodyReferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param newModel 
     */
    public testParameterWithBodyReference(newModel?: NewModel, _options?: Configuration): Observable<void> {
        return this.testParameterWithBodyReferenceWithHttpInfo(newModel, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDashWithHttpInfo(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testParameterWithDash(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testParameterWithDashWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDash(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Observable<void> {
        return this.testParameterWithDashWithHttpInfo(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDashAnUnderscoreWithHttpInfo(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testParameterWithDashAnUnderscore(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testParameterWithDashAnUnderscoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pathParam 
     * @param headerInlineParam 
     * @param xHeaderParam A header param which has dashes in it
     * @param fooBar 
     * @param requestId 
     */
    public testParameterWithDashAnUnderscore(pathParam: string, headerInlineParam: string, xHeaderParam: string, fooBar?: string, requestId?: string, _options?: Configuration): Observable<void> {
        return this.testParameterWithDashAnUnderscoreWithHttpInfo(pathParam, headerInlineParam, xHeaderParam, fooBar, requestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param requestId 
     */
    public testParameterWithReferenceWithHttpInfo(requestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testParameterWithReference(requestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testParameterWithReferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param requestId 
     */
    public testParameterWithReference(requestId?: string, _options?: Configuration): Observable<void> {
        return this.testParameterWithReferenceWithHttpInfo(requestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * when we declare parameters at path level
     * @param requestId 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testParametersAtPathLevelWithHttpInfo(requestId: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testParametersAtPathLevel(requestId, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testParametersAtPathLevelWithHttpInfo(rsp)));
            }));
    }

    /**
     * when we declare parameters at path level
     * @param requestId 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testParametersAtPathLevel(requestId: string, cursor?: string, _options?: Configuration): Observable<void> {
        return this.testParametersAtPathLevelWithHttpInfo(requestId, cursor, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public testResponseHeaderWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Message>> {
        const requestContextPromise = this.requestFactory.testResponseHeader(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testResponseHeaderWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public testResponseHeader(_options?: Configuration): Observable<Message> {
        return this.testResponseHeaderWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Message>) => apiResponse.data));
    }

    /**
     * simply test of patch endpoint are considered
     */
    public testSimplePatchWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testSimplePatch(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testSimplePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * simply test of patch endpoint are considered
     */
    public testSimplePatch(_options?: Configuration): Observable<void> {
        return this.testSimplePatchWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testSimpleTokenWithHttpInfo(qr: string, qo?: string, cursor?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testSimpleToken(qr, qo, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testSimpleTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param qr 
     * @param qo 
     * @param cursor An opaque identifier that points to the next item in the collection.
     */
    public testSimpleToken(qr: string, qo?: string, cursor?: string, _options?: Configuration): Observable<void> {
        return this.testSimpleTokenWithHttpInfo(qr, qo, cursor, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public testWithEmptyResponseWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testWithEmptyResponse(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testWithEmptyResponseWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public testWithEmptyResponse(_options?: Configuration): Observable<void> {
        return this.testWithEmptyResponseWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param firstParam 
     * @param secondParam 
     */
    public testWithTwoParamsWithHttpInfo(firstParam: string, secondParam: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.testWithTwoParams(firstParam, secondParam, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testWithTwoParamsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param firstParam 
     * @param secondParam 
     */
    public testWithTwoParams(firstParam: string, secondParam: string, _options?: Configuration): Observable<void> {
        return this.testWithTwoParamsWithHttpInfo(firstParam, secondParam, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
