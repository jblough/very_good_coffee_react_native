import {StyleSheet, TouchableHighlight} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import useCoffeeImageStore from "@/src/store/useCoffeeImageStore";

export const FavoriteButton = () => {

    const {isFavorite, toggleFavorite} = useCoffeeImageStore();

    const icon = isFavorite() ? "heart" : "heart-outline";
    return (
        <>
            <TouchableHighlight style={styles.fab} onPress={() => toggleFavorite()}>
                <Ionicons name={icon} size={24} color="#fff"/>
            </TouchableHighlight>
        </>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        left: 20,
        top: 20,
        backgroundColor: 'brown',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
    }
});
