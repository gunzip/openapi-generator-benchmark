import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Blob } from '../models/Blob';
import { NewModel } from '../models/NewModel';
import { NewModelXml } from '../models/NewModelXml';
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
    public testMultipleSuccessWithHttpInfo(newModel: NewModel, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.testMultipleSuccessWithHttpInfo(newModel, _options);
        return result.toPromise();
    }

    /**
     * @param newModel 
     */
    public testMultipleSuccess(newModel: NewModel, _options?: Configuration): Promise<void> {
        const result = this.api.testMultipleSuccess(newModel, _options);
        return result.toPromise();
    }


}



