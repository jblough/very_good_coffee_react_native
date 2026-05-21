export enum CoffeeApiResponseStatus {
    empty,
    error,
    success,
}
/*

export class CoffeeApiResponse {
    public readonly status: CoffeeApiResponseStatus;
    public readonly url: string | undefined;
    public readonly error: unknown | undefined;

    public static ok(url: string): CoffeeApiResponse {
        return new CoffeeApiResponse(CoffeeApiResponseStatus.success, url);
    }

    public static error(error: unknown): CoffeeApiResponse {
        return new CoffeeApiResponse(CoffeeApiResponseStatus.error, undefined, error);
    }

    public static empty(): CoffeeApiResponse {
        return new CoffeeApiResponse(CoffeeApiResponseStatus.empty);
    }

    private constructor(status: CoffeeApiResponseStatus, url?: string, error?: unknown) {
        this.status = status;
        this.url = url;
        this.error = error;
    }
}
*/


export interface CoffeeApiResponse {
    status: CoffeeApiResponseStatus;
    url?: string | undefined;
    error?: unknown | undefined;
}