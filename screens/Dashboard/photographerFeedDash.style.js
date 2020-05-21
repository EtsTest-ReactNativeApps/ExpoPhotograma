import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
    },
    image:{
        height: 380,
        justifyContent: 'flex-end'
    },
    tagLine:{
        color: Colors.BLACK,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginVertical: 6
    },
    placeName: {
        color: Colors.BLACK,
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    },
    imageTextView:{
        width: '100%',
        height: 70,
        marginRight: 8,
        marginTop: 370,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        position: 'absolute',
        backgroundColor: Colors.LIGHT_GREY,
        opacity: 0.7
    },

});
