# .DefaultApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putTestParameterWithBodyReference**](DefaultApi.md#putTestParameterWithBodyReference) | **PUT** /put-test-parameter-with-body-ref | 
[**testAuthBearer**](DefaultApi.md#testAuthBearer) | **GET** /test-auth-bearer | 
[**testAuthBearerHttp**](DefaultApi.md#testAuthBearerHttp) | **GET** /test-auth-bearer-http | 
[**testBinaryFileDownload**](DefaultApi.md#testBinaryFileDownload) | **GET** /test-binary-file-download | 
[**testBinaryFileUpload**](DefaultApi.md#testBinaryFileUpload) | **POST** /test-binary-file-upload | 
[**testCustomTokenHeader**](DefaultApi.md#testCustomTokenHeader) | **GET** /test-custom-token-header | 
[**testDates**](DefaultApi.md#testDates) | **GET** /test-dates | 
[**testFileUpload**](DefaultApi.md#testFileUpload) | **POST** /test-file-upload | 
[**testHeaderOptional**](DefaultApi.md#testHeaderOptional) | **GET** /test-header-optional | 
[**testHeaderWithSchemaRef**](DefaultApi.md#testHeaderWithSchemaRef) | **GET** /test-header-with-schema-ref | 
[**testMultipleSuccess**](DefaultApi.md#testMultipleSuccess) | **GET** /test-multiple-success | 
[**testParamWithSchemaRef**](DefaultApi.md#testParamWithSchemaRef) | **GET** /test-param-with-schema-ref/{param} | 
[**testParameterWithBodyReference**](DefaultApi.md#testParameterWithBodyReference) | **POST** /test-parameter-with-body-ref | 
[**testParameterWithDash**](DefaultApi.md#testParameterWithDash) | **GET** /test-parameter-with-dash/{path-param} | 
[**testParameterWithDashAnUnderscore**](DefaultApi.md#testParameterWithDashAnUnderscore) | **GET** /test-parameter-with-dash-and_underscore/{path-param} | 
[**testParameterWithReference**](DefaultApi.md#testParameterWithReference) | **POST** /test-parameter-with-reference | 
[**testParametersAtPathLevel**](DefaultApi.md#testParametersAtPathLevel) | **GET** /test-path-level-parameter | 
[**testResponseHeader**](DefaultApi.md#testResponseHeader) | **GET** /test-response-header | 
[**testSimplePatch**](DefaultApi.md#testSimplePatch) | **PATCH** /test-simple | 
[**testSimpleToken**](DefaultApi.md#testSimpleToken) | **GET** /test-simple-token | 
[**testWithEmptyResponse**](DefaultApi.md#testWithEmptyResponse) | **GET** /test-with-empty-response | 
[**testWithTwoParams**](DefaultApi.md#testWithTwoParams) | **GET** /test-two-path-params/{first-param}/{second-param} | 


# **putTestParameterWithBodyReference**
> void putTestParameterWithBodyReference()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPutTestParameterWithBodyReferenceRequest = {
  // NewModel (optional)
  newModel: {
    id: "id_example",
    name: "name_example",
  },
};

apiInstance.putTestParameterWithBodyReference(body).then((data:any) => {
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

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testAuthBearer**
> void testAuthBearer()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestAuthBearerRequest = {
  // string
  qr: "qr_example",
  // string (optional)
  qo: "qo_example",
  // string | An opaque identifier that points to the next item in the collection. (optional)
  cursor: "cursor_example",
};

apiInstance.testAuthBearer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr** | [**string**] |  | defaults to undefined
 **qo** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] | An opaque identifier that points to the next item in the collection. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearerToken](README.md#bearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Will send &#x60;Authenticated&#x60; |  -  |
**403** | You do not have necessary permissions for the resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testAuthBearerHttp**
> void testAuthBearerHttp()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestAuthBearerHttpRequest = {
  // string
  qr: "qr_example",
  // string (optional)
  qo: "qo_example",
  // string | An opaque identifier that points to the next item in the collection. (optional)
  cursor: "cursor_example",
};

apiInstance.testAuthBearerHttp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr** | [**string**] |  | defaults to undefined
 **qo** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] | An opaque identifier that points to the next item in the collection. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearerTokenHttp](README.md#bearerTokenHttp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Will send &#x60;Authenticated&#x60; |  -  |
**403** | You do not have necessary permissions for the resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testBinaryFileDownload**
> HttpFile testBinaryFileDownload()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.testBinaryFileDownload(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some success response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testBinaryFileUpload**
> void testBinaryFileUpload()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestBinaryFileUploadRequest = {
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.testBinaryFileUpload(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File uploaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testCustomTokenHeader**
> void testCustomTokenHeader()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.testCustomTokenHeader(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[customToken](README.md#customToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Will send &#x60;Authenticated&#x60; |  -  |
**403** | You do not have necessary permissions for the resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testDates**
> Person testDates()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.testDates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Person**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testFileUpload**
> void testFileUpload()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestFileUploadRequest = {
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.testFileUpload(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File uploaded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testHeaderOptional**
> void testHeaderOptional()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestHeaderOptionalRequest = {
  // string (optional)
  param: "param_example",
};

apiInstance.testHeaderOptional(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testHeaderWithSchemaRef**
> void testHeaderWithSchemaRef()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestHeaderWithSchemaRefRequest = {
  // string
  param: "param_example",
};

apiInstance.testHeaderWithSchemaRef(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testMultipleSuccess**
> void | Message testMultipleSuccess()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.testMultipleSuccess(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void | Message**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Will return a Message |  -  |
**202** | Will return just accepted |  -  |
**403** | You do not have necessary permissions for the resource |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testParamWithSchemaRef**
> void testParamWithSchemaRef()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestParamWithSchemaRefRequest = {
  // string
  param: "param_example",
};

apiInstance.testParamWithSchemaRef(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testParameterWithBodyReference**
> void testParameterWithBodyReference()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestParameterWithBodyReferenceRequest = {
  // NewModel (optional)
  newModel: {
    id: "id_example",
    name: "name_example",
  },
};

apiInstance.testParameterWithBodyReference(body).then((data:any) => {
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

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testParameterWithDash**
> void testParameterWithDash()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestParameterWithDashRequest = {
  // string
  pathParam: "path-param_example",
  // string
  headerInlineParam: "headerInlineParam_example",
  // string | A header param which has dashes in it
  xHeaderParam: "x-header-param_example",
  // string (optional)
  fooBar: "foo-bar_example",
  // string (optional)
  requestId: "request-id_example",
};

apiInstance.testParameterWithDash(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pathParam** | [**string**] |  | defaults to undefined
 **headerInlineParam** | [**string**] |  | defaults to undefined
 **xHeaderParam** | [**string**] | A header param which has dashes in it | defaults to undefined
 **fooBar** | [**string**] |  | (optional) defaults to undefined
 **requestId** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testParameterWithDashAnUnderscore**
> void testParameterWithDashAnUnderscore()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestParameterWithDashAnUnderscoreRequest = {
  // string
  pathParam: "path-param_example",
  // string
  headerInlineParam: "headerInlineParam_example",
  // string | A header param which has dashes in it
  xHeaderParam: "x-header-param_example",
  // string (optional)
  fooBar: "foo_bar_example",
  // string (optional)
  requestId: "request-id_example",
};

apiInstance.testParameterWithDashAnUnderscore(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pathParam** | [**string**] |  | defaults to undefined
 **headerInlineParam** | [**string**] |  | defaults to undefined
 **xHeaderParam** | [**string**] | A header param which has dashes in it | defaults to undefined
 **fooBar** | [**string**] |  | (optional) defaults to undefined
 **requestId** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testParameterWithReference**
> void testParameterWithReference()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestParameterWithReferenceRequest = {
  // string (optional)
  requestId: "request-id_example",
};

apiInstance.testParameterWithReference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testParametersAtPathLevel**
> void testParametersAtPathLevel()

when we declare parameters at path level

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestParametersAtPathLevelRequest = {
  // string
  requestId: "request-id_example",
  // string | An opaque identifier that points to the next item in the collection. (optional)
  cursor: "cursor_example",
};

apiInstance.testParametersAtPathLevel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | [**string**] |  | defaults to undefined
 **cursor** | [**string**] | An opaque identifier that points to the next item in the collection. | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testResponseHeader**
> Message testResponseHeader()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.testResponseHeader(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Message**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Will create a Message |  * Location -  <br>  * Id -  <br>  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testSimplePatch**
> void testSimplePatch()

simply test of patch endpoint are considered

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.testSimplePatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testSimpleToken**
> void testSimpleToken()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestSimpleTokenRequest = {
  // string
  qr: "qr_example",
  // string (optional)
  qo: "qo_example",
  // string | An opaque identifier that points to the next item in the collection. (optional)
  cursor: "cursor_example",
};

apiInstance.testSimpleToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr** | [**string**] |  | defaults to undefined
 **qo** | [**string**] |  | (optional) defaults to undefined
 **cursor** | [**string**] | An opaque identifier that points to the next item in the collection. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[simpleToken](README.md#simpleToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Will send &#x60;Authenticated&#x60; |  -  |
**403** | You do not have necessary permissions for the resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testWithEmptyResponse**
> void testWithEmptyResponse()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.testWithEmptyResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testWithTwoParams**
> void testWithTwoParams()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTestWithTwoParamsRequest = {
  // string
  firstParam: "first-param_example",
  // string
  secondParam: "second-param_example",
};

apiInstance.testWithTwoParams(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstParam** | [**string**] |  | defaults to undefined
 **secondParam** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**500** | Fatal error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


