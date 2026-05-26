export enum CoffeeApiResponseStatus {
    empty,
    error,
    success,
}

export interface CoffeeApiResponse {
    status: CoffeeApiResponseStatus;
    url?: string | undefined;
    error?: unknown | undefined;
}