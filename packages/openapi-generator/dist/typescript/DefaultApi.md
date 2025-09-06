# .DefaultApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testMultipleSuccess**](DefaultApi.md#testMultipleSuccess) | **POST** /test-multiple-success | 


# **testMultipleSuccess**
> void testMultipleSuccess(newModel)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestMultipleSuccessRequest = {
  // NewModel
  newModel: {
    id: "id_example",
    name: "name_example",
  },
};

apiInstance.testMultipleSuccess(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newModel** | **NewModel**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**403** | You do not have necessary permissions for the resource |  -  |
**404** | Not found |  -  |
**0** | You do not have necessary permissions for the resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


