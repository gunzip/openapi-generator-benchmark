/** AUTOGENERATED - DO NOT EDIT **/
/* tslint:disable */
/* eslint-disable */

import {
  t_CustomStringFormatTest,
  t_Message,
  t_NewModel,
  t_OneOfTest,
  t_Person,
  t_testBinaryFileUploadMultipartFormDataRequestBody,
  t_testFileUploadMultipartFormDataRequestBody,
} from "./models"
import { s_Message, s_OneOfTest, s_Person } from "./schemas"
import {
  AbstractFetchClient,
  AbstractFetchClientConfig,
  Res,
  TypedFetchResponse,
} from "@nahkies/typescript-fetch-runtime/main"
import { responseValidationFactory } from "@nahkies/typescript-fetch-runtime/zod"
import { z } from "zod"

export interface ApiClientConfig extends AbstractFetchClientConfig {}

export class ApiClient extends AbstractFetchClient {
  constructor(config: ApiClientConfig) {
    super(config)
  }

  async testAuthBearer(
    p: {
      qo?: string
      qr: string
      cursor?: string
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<403, void>>> {
    const url = this.basePath + `/test-auth-bearer`
    const query = this._query({ qo: p["qo"], qr: p["qr"], cursor: p["cursor"] })

    const res = this._fetch(
      url + query,
      { method: "GET", ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["403", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testAuthBearerHttp(
    p: {
      qo?: string
      qr: string
      cursor?: string
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<403, void>>> {
    const url = this.basePath + `/test-auth-bearer-http`
    const query = this._query({ qo: p["qo"], qr: p["qr"], cursor: p["cursor"] })

    const res = this._fetch(
      url + query,
      { method: "GET", ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["403", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testSimpleToken(
    p: {
      qo?: string
      qr: string
      cursor?: string
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<403, void>>> {
    const url = this.basePath + `/test-simple-token`
    const query = this._query({ qo: p["qo"], qr: p["qr"], cursor: p["cursor"] })

    const res = this._fetch(
      url + query,
      { method: "GET", ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["403", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testMultipleSuccess(
    timeout?: number,
    opts?: RequestInit,
  ): Promise<
    TypedFetchResponse<
      | Res<200, t_Message>
      | Res<202, void>
      | Res<403, t_OneOfTest>
      | Res<404, void>
    >
  > {
    const url = this.basePath + `/test-multiple-success`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory(
      [
        ["200", s_Message],
        ["202", z.undefined()],
        ["403", s_OneOfTest],
        ["404", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testFileUpload(
    p: {
      requestBody: t_testFileUploadMultipartFormDataRequestBody
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void>>> {
    const url = this.basePath + `/test-file-upload`
    const headers = this._headers({ "Content-Type": "multipart/form-data" })
    const body = JSON.stringify(p.requestBody)

    const res = this._fetch(
      url,
      { method: "POST", headers, body, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory([["200", z.undefined()]], undefined)(res)
  }

  async testBinaryFileUpload(
    p: {
      requestBody: t_testBinaryFileUploadMultipartFormDataRequestBody
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void>>> {
    const url = this.basePath + `/test-binary-file-upload`
    const headers = this._headers({ "Content-Type": "multipart/form-data" })
    const body = JSON.stringify(p.requestBody)

    const res = this._fetch(
      url,
      { method: "POST", headers, body, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory([["200", z.undefined()]], undefined)(res)
  }

  async testBinaryFileDownload(
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, string>>> {
    const url = this.basePath + `/test-binary-file-download`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory([["200", z.string()]], undefined)(res)
  }

  async testResponseHeader(
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<201, t_Message> | Res<500, void>>> {
    const url = this.basePath + `/test-response-header`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory(
      [
        ["201", s_Message],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testParameterWithReference(
    p: {
      requestId?: string
    } = {},
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<201, void> | Res<500, void>>> {
    const url = this.basePath + `/test-parameter-with-reference`
    const query = this._query({ "request-id": p["requestId"] })

    const res = this._fetch(
      url + query,
      { method: "POST", ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["201", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testParameterWithBodyReference(
    p: {
      requestBody: t_NewModel
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<201, void> | Res<500, void>>> {
    const url = this.basePath + `/test-parameter-with-body-ref`
    const headers = this._headers({ "Content-Type": "application/json" })
    const body = JSON.stringify(p.requestBody)

    const res = this._fetch(
      url,
      { method: "POST", headers, body, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["201", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async putTestParameterWithBodyReference(
    p: {
      requestBody: t_NewModel
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<201, void> | Res<500, void>>> {
    const url = this.basePath + `/put-test-parameter-with-body-ref`
    const headers = this._headers({ "Content-Type": "application/json" })
    const body = JSON.stringify(p.requestBody)

    const res = this._fetch(
      url,
      { method: "PUT", headers, body, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["201", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testParameterWithDash(
    p: {
      pathParam: string
      fooBar?: string
      headerInlineParam: string
      requestId?: string
      xHeaderParam: string
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<500, void>>> {
    const url = this.basePath + `/test-parameter-with-dash/${p["pathParam"]}`
    const headers = this._headers({
      headerInlineParam: p["headerInlineParam"],
      "x-header-param": p["xHeaderParam"],
    })
    const query = this._query({
      "foo-bar": p["fooBar"],
      "request-id": p["requestId"],
    })

    const res = this._fetch(
      url + query,
      { method: "GET", headers, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testParameterWithDashAnUnderscore(
    p: {
      pathParam: string
      fooBar?: string
      headerInlineParam: string
      requestId?: string
      xHeaderParam: string
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<500, void>>> {
    const url =
      this.basePath +
      `/test-parameter-with-dash-and_underscore/${p["pathParam"]}`
    const headers = this._headers({
      headerInlineParam: p["headerInlineParam"],
      "x-header-param": p["xHeaderParam"],
    })
    const query = this._query({
      foo_bar: p["fooBar"],
      "request-id": p["requestId"],
    })

    const res = this._fetch(
      url + query,
      { method: "GET", headers, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testWithTwoParams(
    p: {
      firstParam: string
      secondParam: string
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<500, void>>> {
    const url =
      this.basePath +
      `/test-two-path_params/${p["firstParam"]}/${p["secondParam"]}`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testParametersAtPathLevel(
    p: {
      requestId: string
      cursor?: string
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<500, void>>> {
    const url = this.basePath + `/test-path-level-parameter`
    const query = this._query({
      "request-id": p["requestId"],
      cursor: p["cursor"],
    })

    const res = this._fetch(
      url + query,
      { method: "GET", ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testSimplePatch(
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<500, void>>> {
    const url = this.basePath + `/test-simple`

    const res = this._fetch(url, { method: "PATCH", ...(opts ?? {}) }, timeout)

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["500", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testCustomTokenHeader(
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void> | Res<403, void>>> {
    const url = this.basePath + `/test-custom-token-header`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory(
      [
        ["200", z.undefined()],
        ["403", z.undefined()],
      ],
      undefined,
    )(res)
  }

  async testWithEmptyResponse(
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void>>> {
    const url = this.basePath + `/test-with-empty-response`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory([["200", z.undefined()]], undefined)(res)
  }

  async testParamWithSchemaRef(
    p: {
      param: t_CustomStringFormatTest
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void>>> {
    const url = this.basePath + `/test-param-with-schema-ref/${p["param"]}`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory([["200", z.undefined()]], undefined)(res)
  }

  async testHeaderWithSchemaRef(
    p: {
      param: t_CustomStringFormatTest
    },
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void>>> {
    const url = this.basePath + `/test-header-with-schema-ref`
    const headers = this._headers({ param: p["param"] })

    const res = this._fetch(
      url,
      { method: "GET", headers, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory([["200", z.undefined()]], undefined)(res)
  }

  async testHeaderOptional(
    p: {
      param?: t_CustomStringFormatTest
    } = {},
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, void>>> {
    const url = this.basePath + `/test-header-optional`
    const headers = this._headers({ param: p["param"] })

    const res = this._fetch(
      url,
      { method: "GET", headers, ...(opts ?? {}) },
      timeout,
    )

    return responseValidationFactory([["200", z.undefined()]], undefined)(res)
  }

  async testDates(
    timeout?: number,
    opts?: RequestInit,
  ): Promise<TypedFetchResponse<Res<200, t_Person>>> {
    const url = this.basePath + `/test-dates`

    const res = this._fetch(url, { method: "GET", ...(opts ?? {}) }, timeout)

    return responseValidationFactory([["200", s_Person]], undefined)(res)
  }
}
