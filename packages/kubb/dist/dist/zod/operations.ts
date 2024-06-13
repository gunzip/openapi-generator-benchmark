import { testAuthBearerQueryResponseSchema, testAuthBearer403Schema, testAuthBearerQueryParamsSchema } from "./testAuthBearerSchema";
import { testAuthBearerHttpQueryResponseSchema, testAuthBearerHttp403Schema, testAuthBearerHttpQueryParamsSchema } from "./testAuthBearerHttpSchema";
import { testSimpleTokenQueryResponseSchema, testSimpleToken403Schema, testSimpleTokenQueryParamsSchema } from "./testSimpleTokenSchema";
import { testMultipleSuccessQueryResponseSchema, testMultipleSuccess403Schema, testMultipleSuccess404Schema } from "./testMultipleSuccessSchema";
import { testFileUploadMutationRequestSchema, testFileUploadMutationResponseSchema } from "./testFileUploadSchema";
import { testBinaryFileUploadMutationRequestSchema, testBinaryFileUploadMutationResponseSchema } from "./testBinaryFileUploadSchema";
import { testBinaryFileDownloadQueryResponseSchema } from "./testBinaryFileDownloadSchema";
import { testResponseHeaderQueryResponseSchema, testResponseHeader500Schema } from "./testResponseHeaderSchema";
import { testParameterWithReferenceMutationResponseSchema, testParameterWithReference500Schema, testParameterWithReferenceQueryParamsSchema } from "./testParameterWithReferenceSchema";
import { testParameterWithBodyReferenceMutationRequestSchema, testParameterWithBodyReferenceMutationResponseSchema, testParameterWithBodyReference500Schema } from "./testParameterWithBodyReferenceSchema";
import { putTestParameterWithBodyReferenceMutationRequestSchema, putTestParameterWithBodyReferenceMutationResponseSchema, putTestParameterWithBodyReference500Schema } from "./putTestParameterWithBodyReferenceSchema";
import { testParameterWithDashQueryResponseSchema, testParameterWithDash500Schema, testParameterWithDashPathParamsSchema, testParameterWithDashQueryParamsSchema, testParameterWithDashHeaderParamsSchema } from "./testParameterWithDashSchema";
import { testParameterWithDashAnUnderscoreQueryResponseSchema, testParameterWithDashAnUnderscore500Schema, testParameterWithDashAnUnderscorePathParamsSchema, testParameterWithDashAnUnderscoreQueryParamsSchema, testParameterWithDashAnUnderscoreHeaderParamsSchema } from "./testParameterWithDashAnUnderscoreSchema";
import { testWithTwoParamsQueryResponseSchema, testWithTwoParams500Schema, testWithTwoParamsPathParamsSchema } from "./testWithTwoParamsSchema";
import { testParametersAtPathLevelQueryResponseSchema, testParametersAtPathLevel500Schema, testParametersAtPathLevelQueryParamsSchema } from "./testParametersAtPathLevelSchema";
import { testSimplePatchMutationResponseSchema, testSimplePatch500Schema } from "./testSimplePatchSchema";
import { testCustomTokenHeaderQueryResponseSchema, testCustomTokenHeader403Schema } from "./testCustomTokenHeaderSchema";
import { testWithEmptyResponseQueryResponseSchema } from "./testWithEmptyResponseSchema";
import { testParamWithSchemaRefQueryResponseSchema, testParamWithSchemaRefPathParamsSchema } from "./testParamWithSchemaRefSchema";
import { testHeaderWithSchemaRefQueryResponseSchema, testHeaderWithSchemaRefHeaderParamsSchema } from "./testHeaderWithSchemaRefSchema";
import { testHeaderOptionalQueryResponseSchema, testHeaderOptionalHeaderParamsSchema } from "./testHeaderOptionalSchema";
import { testDatesQueryResponseSchema } from "./testDatesSchema";

 export const operations = { "testAuthBearer": {
        request: undefined,
        parameters: {
            path: undefined,
            query: testAuthBearerQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: testAuthBearerQueryResponseSchema,
            403: testAuthBearer403Schema
        }
    }, "testAuthBearerHttp": {
        request: undefined,
        parameters: {
            path: undefined,
            query: testAuthBearerHttpQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: testAuthBearerHttpQueryResponseSchema,
            403: testAuthBearerHttp403Schema
        }
    }, "testSimpleToken": {
        request: undefined,
        parameters: {
            path: undefined,
            query: testSimpleTokenQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: testSimpleTokenQueryResponseSchema,
            403: testSimpleToken403Schema
        }
    }, "testMultipleSuccess": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testMultipleSuccessQueryResponseSchema,
            403: testMultipleSuccess403Schema,
            404: testMultipleSuccess404Schema
        }
    }, "testFileUpload": {
        request: testFileUploadMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testFileUploadMutationResponseSchema
        }
    }, "testBinaryFileUpload": {
        request: testBinaryFileUploadMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testBinaryFileUploadMutationResponseSchema
        }
    }, "testBinaryFileDownload": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testBinaryFileDownloadQueryResponseSchema
        }
    }, "testResponseHeader": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            201: testResponseHeaderQueryResponseSchema,
            500: testResponseHeader500Schema
        }
    }, "testParameterWithReference": {
        request: undefined,
        parameters: {
            path: undefined,
            query: testParameterWithReferenceQueryParamsSchema,
            header: undefined
        },
        responses: {
            201: testParameterWithReferenceMutationResponseSchema,
            500: testParameterWithReference500Schema
        }
    }, "testParameterWithBodyReference": {
        request: testParameterWithBodyReferenceMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            201: testParameterWithBodyReferenceMutationResponseSchema,
            500: testParameterWithBodyReference500Schema
        }
    }, "putTestParameterWithBodyReference": {
        request: putTestParameterWithBodyReferenceMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            201: putTestParameterWithBodyReferenceMutationResponseSchema,
            500: putTestParameterWithBodyReference500Schema
        }
    }, "testParameterWithDash": {
        request: undefined,
        parameters: {
            path: testParameterWithDashPathParamsSchema,
            query: testParameterWithDashQueryParamsSchema,
            header: testParameterWithDashHeaderParamsSchema
        },
        responses: {
            200: testParameterWithDashQueryResponseSchema,
            500: testParameterWithDash500Schema
        }
    }, "testParameterWithDashAnUnderscore": {
        request: undefined,
        parameters: {
            path: testParameterWithDashAnUnderscorePathParamsSchema,
            query: testParameterWithDashAnUnderscoreQueryParamsSchema,
            header: testParameterWithDashAnUnderscoreHeaderParamsSchema
        },
        responses: {
            200: testParameterWithDashAnUnderscoreQueryResponseSchema,
            500: testParameterWithDashAnUnderscore500Schema
        }
    }, "testWithTwoParams": {
        request: undefined,
        parameters: {
            path: testWithTwoParamsPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testWithTwoParamsQueryResponseSchema,
            500: testWithTwoParams500Schema
        }
    }, "testParametersAtPathLevel": {
        request: undefined,
        parameters: {
            path: undefined,
            query: testParametersAtPathLevelQueryParamsSchema,
            header: undefined
        },
        responses: {
            200: testParametersAtPathLevelQueryResponseSchema,
            500: testParametersAtPathLevel500Schema
        }
    }, "testSimplePatch": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testSimplePatchMutationResponseSchema,
            500: testSimplePatch500Schema
        }
    }, "testCustomTokenHeader": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testCustomTokenHeaderQueryResponseSchema,
            403: testCustomTokenHeader403Schema
        }
    }, "testWithEmptyResponse": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testWithEmptyResponseQueryResponseSchema
        }
    }, "testParamWithSchemaRef": {
        request: undefined,
        parameters: {
            path: testParamWithSchemaRefPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testParamWithSchemaRefQueryResponseSchema
        }
    }, "testHeaderWithSchemaRef": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: testHeaderWithSchemaRefHeaderParamsSchema
        },
        responses: {
            200: testHeaderWithSchemaRefQueryResponseSchema
        }
    }, "testHeaderOptional": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: testHeaderOptionalHeaderParamsSchema
        },
        responses: {
            200: testHeaderOptionalQueryResponseSchema
        }
    }, "testDates": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: testDatesQueryResponseSchema
        }
    } } as const;
export const paths = { "/test-auth-bearer": {
        get: operations["testAuthBearer"]
    }, "/test-auth-bearer-http": {
        get: operations["testAuthBearerHttp"]
    }, "/test-simple-token": {
        get: operations["testSimpleToken"]
    }, "/test-multiple-success": {
        get: operations["testMultipleSuccess"]
    }, "/test-file-upload": {
        post: operations["testFileUpload"]
    }, "/test-binary-file-upload": {
        post: operations["testBinaryFileUpload"]
    }, "/test-binary-file-download": {
        get: operations["testBinaryFileDownload"]
    }, "/test-response-header": {
        get: operations["testResponseHeader"]
    }, "/test-parameter-with-reference": {
        post: operations["testParameterWithReference"]
    }, "/test-parameter-with-body-ref": {
        post: operations["testParameterWithBodyReference"]
    }, "/put-test-parameter-with-body-ref": {
        put: operations["putTestParameterWithBodyReference"]
    }, "/test-parameter-with-dash/{path_param}": {
        get: operations["testParameterWithDash"]
    }, "/test-parameter-with-dash-and_underscore/{path_param}": {
        get: operations["testParameterWithDashAnUnderscore"]
    }, "/test-two-path_params/{first_param}/{second_param}": {
        get: operations["testWithTwoParams"]
    }, "/test-path-level-parameter": {
        get: operations["testParametersAtPathLevel"]
    }, "/test-simple": {
        patch: operations["testSimplePatch"]
    }, "/test-custom-token-header": {
        get: operations["testCustomTokenHeader"]
    }, "/test-with-empty-response": {
        get: operations["testWithEmptyResponse"]
    }, "/test-param-with-schema-ref/{param}": {
        get: operations["testParamWithSchemaRef"]
    }, "/test-header-with-schema-ref": {
        get: operations["testHeaderWithSchemaRef"]
    }, "/test-header-optional": {
        get: operations["testHeaderOptional"]
    }, "/test-dates": {
        get: operations["testDates"]
    } } as const;