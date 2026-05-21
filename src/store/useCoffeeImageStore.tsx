import {create} from 'zustand';
// import {persist, createJSONStorage} from 'zustand/middleware';
import {fetchRandomImageUrl} from "@/src/api";
import {CoffeeApiResponseStatus} from "@/src/types/CoffeeApiResponse";

interface CoffeeImageStore {
    imageUrl: string | undefined;
    favorites: string[],
    refreshImageUrl: () => Promise<void>;
    toggleFavorite: () => void;
    isFavorite: () => boolean;
    selectImage: (url: string) => void;
}

const useCoffeeImageStore = create<CoffeeImageStore>()
((set, get) => ({
    imageUrl: undefined,
    favorites: [],

    refreshImageUrl: async () => {
        const response = await fetchRandomImageUrl();
        if (response.status === CoffeeApiResponseStatus.success && response.url)
            set({imageUrl: response.url ?? ''});
    },

    toggleFavorite: () => {
        const {imageUrl, favorites} = get();
        if (imageUrl) {
            if (favorites.includes(imageUrl)) {
                set({favorites: favorites.filter((favorite) => favorite !== imageUrl)});
            } else {
                set({favorites: [...favorites, imageUrl]});
            }
        }
    },

    isFavorite: (): boolean => {
        const {imageUrl, favorites} = get();
        if (!imageUrl) {
            return false;
        }
        return favorites.includes(imageUrl);
    },

    selectImage: (url: string) => {
        set({imageUrl: url});
    },
}));

export default useCoffeeImageStore;