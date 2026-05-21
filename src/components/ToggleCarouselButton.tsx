import {StyleSheet, TouchableHighlight} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

interface ToggleCarouselButtonProps {
    isOpen: boolean;
    callback: () => void;
}

export const ToggleCarouselButton = ({isOpen, callback}: ToggleCarouselButtonProps) => {

    return (
        <>
            <TouchableHighlight style={styles.fab} onPress={() => callback()}>
                <Ionicons name={isOpen ? "images" : "images-outline"} size={24} color="#fff"/>
            </TouchableHighlight>
        </>
    );
};

const styles = StyleSheet.create({
    fab: {
        // position: 'absolute',
        // left: 20,
        // bottom: 150,
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
