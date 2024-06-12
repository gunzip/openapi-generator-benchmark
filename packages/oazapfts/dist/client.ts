/**
 * Test API
 * 1.0.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
import * as QS from "@oazapfts/runtime/query";
export const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders> = {
    headers: {},
    baseUrl: "https://localhost/api/v1",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "https://localhost/api/v1"
};
export type MessageSubject = string;
export type MessageBodyMarkdown = string;
export type MessageContent = {
    subject?: MessageSubject;
    markdown: MessageBodyMarkdown;
};
export type Message = {
    id: string;
    content: MessageContent;
    sender_service_id?: string;
};
export type OneOfTest = {
    limited?: boolean;
} | {
    unlimited?: boolean;
};
export type NewModel = {
    id: string;
    name: string;
};
export type CustomStringFormatTest = string;
export type Person = {
    /** name of the person */
    name?: string;
    address?: {
        location?: string;
        city?: string;
        zipCode?: string;
    };
    birth?: string;
    death?: string;
    age?: 20 | 40 | 50;
    zipCode?: string;
};
export function testAuthBearer(qr: string, { qo, cursor }: {
    qo?: string;
    cursor?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-auth-bearer${QS.query(QS.explode({
        qo,
        qr,
        cursor
    }))}`, {
        ...opts
    });
}
export function testAuthBearerHttp(qr: string, { qo, cursor }: {
    qo?: string;
    cursor?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-auth-bearer-http${QS.query(QS.explode({
        qo,
        qr,
        cursor
    }))}`, {
        ...opts
    });
}
export function testSimpleToken(qr: string, { qo, cursor }: {
    qo?: string;
    cursor?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-simple-token${QS.query(QS.explode({
        qo,
        qr,
        cursor
    }))}`, {
        ...opts
    });
}
export function testMultipleSuccess(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Message;
    } | {
        status: 202;
    } | {
        status: 403;
        data: OneOfTest;
    } | {
        status: 404;
    }>("/test-multiple-success", {
        ...opts
    });
}
export function testFileUpload(body: {
    file?: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-file-upload", oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
export function testBinaryFileUpload(body: {
    file?: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-binary-file-upload", oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
export function testBinaryFileDownload(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>("/test-binary-file-download", {
        ...opts
    });
}
export function testResponseHeader(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: Message;
    } | {
        status: 500;
    }>("/test-response-header", {
        ...opts
    });
}
export function testParameterWithReference({ requestId }: {
    requestId?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-parameter-with-reference${QS.query(QS.explode({
        "request-id": requestId
    }))}`, {
        ...opts,
        method: "POST"
    });
}
export function testParameterWithBodyReference(newModel?: NewModel, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-parameter-with-body-ref", oazapfts.json({
        ...opts,
        method: "POST",
        body: newModel
    }));
}
export function putTestParameterWithBodyReference(newModel?: NewModel, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/put-test-parameter-with-body-ref", oazapfts.json({
        ...opts,
        method: "PUT",
        body: newModel
    }));
}
export function testParameterWithDash(pathParam: string, headerInlineParam: string, xHeaderParam: string, { fooBar, requestId }: {
    fooBar?: string;
    requestId?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-parameter-with-dash/${encodeURIComponent(pathParam)}${QS.query(QS.explode({
        "foo-bar": fooBar,
        "request-id": requestId
    }))}`, {
        ...opts,
        headers: oazapfts.mergeHeaders(opts?.headers, {
            headerInlineParam,
            "x-header-param": xHeaderParam
        })
    });
}
export function testParameterWithDashAnUnderscore(pathParam: string, headerInlineParam: string, xHeaderParam: string, { fooBar, requestId }: {
    fooBar?: string;
    requestId?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-parameter-with-dash-and_underscore/${encodeURIComponent(pathParam)}${QS.query(QS.explode({
        foo_bar: fooBar,
        "request-id": requestId
    }))}`, {
        ...opts,
        headers: oazapfts.mergeHeaders(opts?.headers, {
            headerInlineParam,
            "x-header-param": xHeaderParam
        })
    });
}
export function testWithTwoParams(firstParam: string, secondParam: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-two-path-params/${encodeURIComponent(firstParam)}/${encodeURIComponent(secondParam)}`, {
        ...opts
    });
}
/**
 * when we declare parameters at path level
 */
export function testParametersAtPathLevel(requestId: string, { cursor }: {
    cursor?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-path-level-parameter${QS.query(QS.explode({
        "request-id": requestId,
        cursor
    }))}`, {
        ...opts
    });
}
/**
 * simply test of patch endpoint are considered
 */
export function testSimplePatch(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-simple", {
        ...opts,
        method: "PATCH"
    });
}
export function testCustomTokenHeader(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-custom-token-header", {
        ...opts
    });
}
export function testWithEmptyResponse(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-with-empty-response", {
        ...opts
    });
}
export function testParamWithSchemaRef(param: CustomStringFormatTest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/test-param-with-schema-ref/${encodeURIComponent(param)}`, {
        ...opts
    });
}
export function testHeaderWithSchemaRef(param: CustomStringFormatTest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-header-with-schema-ref", {
        ...opts,
        headers: oazapfts.mergeHeaders(opts?.headers, {
            param
        })
    });
}
export function testHeaderOptional({ param }: {
    param?: CustomStringFormatTest;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/test-header-optional", {
        ...opts,
        headers: oazapfts.mergeHeaders(opts?.headers, {
            param
        })
    });
}
export function testDates(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Person;
    }>("/test-dates", {
        ...opts
    });
}
