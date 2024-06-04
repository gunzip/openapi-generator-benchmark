import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class BearerTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "bearerToken";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", this.apiKey);
    }
}

/**
 * Applies http authentication to the request context.
 */
export class BearerTokenHttpAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "bearerTokenHttp";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class SimpleTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "simpleToken";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-Functions-Key", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class CustomTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "customToken";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("custom-token", this.apiKey);
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "bearerToken"?: SecurityAuthentication,
    "bearerTokenHttp"?: SecurityAuthentication,
    "simpleToken"?: SecurityAuthentication,
    "customToken"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "bearerToken"?: ApiKeyConfiguration,
    "bearerTokenHttp"?: HttpBearerConfiguration,
    "simpleToken"?: ApiKeyConfiguration,
    "customToken"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["bearerToken"]) {
        authMethods["bearerToken"] = new BearerTokenAuthentication(
            config["bearerToken"]
        );
    }

    if (config["bearerTokenHttp"]) {
        authMethods["bearerTokenHttp"] = new BearerTokenHttpAuthentication(
            config["bearerTokenHttp"]["tokenProvider"]
        );
    }

    if (config["simpleToken"]) {
        authMethods["simpleToken"] = new SimpleTokenAuthentication(
            config["simpleToken"]
        );
    }

    if (config["customToken"]) {
        authMethods["customToken"] = new CustomTokenAuthentication(
            config["customToken"]
        );
    }

    return authMethods;
}