import {CoffeeApiResponseStatus, CoffeeApiResponse} from "@/src/types/CoffeeApiResponse";

export const coffeeUrl = "https://coffee.alexflipnote.dev/random.json";

export const fetchRandomImageUrl = async (): Promise<CoffeeApiResponse> => {
    try {
        const res = await fetch(coffeeUrl);
        const data = await res.json();
        const url = data?.file;
        if (!url) {
            return { status: CoffeeApiResponseStatus.empty };
        }
        return {
            status: CoffeeApiResponseStatus.success,
            url: url,
        };
    } catch (error) {
        return {
            status: CoffeeApiResponseStatus.error,
            error
        };
    }
}