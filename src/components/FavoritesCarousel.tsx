import {FlatList, StyleSheet, TouchableHighlight, View} from 'react-native';
import useCoffeeImageStore from "@/src/store/useCoffeeImageStore";
import {Image} from "expo-image";

export const FavoriteCarousel = () => {

    const {favorites, selectImage} = useCoffeeImageStore();

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item}
                    renderItem={(item) =>
                        (<TouchableHighlight
                            onPress={() => selectImage(item.item)}
                        >
                            <Image source={item.item} contentFit="contain" style={styles.image}/>
                        </TouchableHighlight>)
                    }
                    horizontal={true}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // left: 20,
        // right: 20,
        // bottom: 10,
        elevation: 5,
        backgroundColor: '#000',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
    },
    image: {
        width: 80,
        height: 100,
        margin: 10,
    }
});
