import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {ImageBackground} from 'expo-image';
import {FavoriteButton} from "@/src/components/FavoriteButton";
import {RefreshButton} from '@/src/components/RefreshButton';
import {ToggleCarouselButton} from '@/src/components/ToggleCarouselButton';
import {FavoriteCarousel} from "@/src/components/FavoritesCarousel";
import {SafeAreaView} from 'react-native-safe-area-context';
import useCoffeeImageStore from "@/src/store/useCoffeeImageStore";
import {StatusBar} from "expo-status-bar";
import Animated, {FadeIn, FadeOut} from "react-native-reanimated";

export default function Index() {
    const [showCarousel, setShowCarousel] = useState(false);
    const {favorites, imageUrl, refreshImageUrl} = useCoffeeImageStore();

    useEffect(() => {
        void refreshImageUrl();
    }, [refreshImageUrl]);

    const carouselButton = () => {
        const style = {...styles.carousel, bottom: showCarousel ? 150 : 20};

        return <Animated.View style={style}>
            <ToggleCarouselButton isOpen={showCarousel} callback={() => setShowCarousel(!showCarousel)}/>
        </Animated.View>;
    };

    const carousel = () => {
        return (
            <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.carousel}>
                <FavoriteCarousel/>
            </Animated.View>
        );
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: styles.container.backgroundColor}}>
            <View style={styles.container}>
                {imageUrl && <ImageBackground source={imageUrl} contentFit="contain" style={styles.image}/>}
                <FavoriteButton/>
                <RefreshButton/>
                {favorites.length > 0 && carouselButton()}
                {favorites.length > 0 && showCarousel && carousel()}
            </View>
            <StatusBar style={"light"} translucent={true}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 50,
        backgroundColor: "#333",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    carouselButton: {
        position: 'absolute',
        left: 20,
        // bottom: 150,
    },
    carousel: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 10,
    }
});
