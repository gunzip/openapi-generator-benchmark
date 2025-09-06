import * as r from '@typoas/runtime';
export type AuthMethods = {};
export function createContext<FetcherData extends r.BaseFetcherData>(params?: r.CreateContextParams<AuthMethods, FetcherData>): r.Context<AuthMethods, FetcherData> { return new r.Context<AuthMethods, FetcherData>({
    serverConfiguration: new r.ServerConfiguration('', {}),
    authMethods: {},
    ...params
}); }
/**
 * Get pet by ID
 */
export async function petPetIdGet<FetcherData extends r.BaseFetcherData>(ctx: r.Context<AuthMethods, FetcherData>, params: {
    petId: string;
}, opts?: FetcherData): Promise<r.StatusResponse<200, {
    id?: string;
    name?: string;
}> | r.StatusResponse<404, unknown> | r.StatusResponse<'default', unknown>> {
    const req = await ctx.createRequest({
        path: '/pet/{petId}',
        params,
        method: r.HttpMethod.GET
    });
    const res = await ctx.sendRequest(req, opts);
    return ctx.handleResponse(res, {}, true);
}
