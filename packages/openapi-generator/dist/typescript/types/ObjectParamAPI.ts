import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Blob } from '../models/Blob';
import { NewModel } from '../models/NewModel';
import { NewModelXml } from '../models/NewModelXml';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiTestMultipleSuccessRequest {
    /**
     * 
     * @type NewModel
     * @memberof DefaultApitestMultipleSuccess
     */
    newModel: NewModel
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public testMultipleSuccessWithHttpInfo(param: DefaultApiTestMultipleSuccessRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.testMultipleSuccessWithHttpInfo(param.newModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testMultipleSuccess(param: DefaultApiTestMultipleSuccessRequest, options?: Configuration): Promise<void> {
        return this.api.testMultipleSuccess(param.newModel,  options).toPromise();
    }

}
