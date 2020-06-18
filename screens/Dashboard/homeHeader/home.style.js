import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
    },
    darkOverlay:{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 270,
        backgroundColor: Colors.DARK,
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    searchContainer:{
        paddingTop: 100,
        paddingLeft: 16
    },
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    userText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    searchBox: {
        marginTop: 16,
        backgroundColor: Colors.LIGHT_GREY,
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%'
    },

    imageOverlay: {
        width: 150,
        height: 250,
        marginRight: 8,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: Colors.BLACK,
        opacity: 0.2
    },
    imageTextView:{
        width: 150,
        height: 30,
        marginRight: 8,
        marginTop: 220,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 0,
        position: 'absolute',
        backgroundColor: Colors.LIGHT_GREY,
        opacity: 0.8
    },
    imageLocationPin:{
        position: 'absolute',
        marginTop: 8,
        left: 5,
        bottom: 8,
        opacity: 1
    },
    imageLocationPinBig:{
        position: 'relative',
        marginRight: 10,
        top: 14,
        left: 5,
        marginBottom: 5,
    },
    imageText: {
        position: 'absolute',
        color: Colors.BLACK,
        marginTop: 5,
        fontSize: 15,
        left: 26,
        bottom: 6,
        fontWeight: 'bold',
        opacity: 1
    },
    imageTextBig: {
        fontSize: 18,
        color: Colors.BLACK,
        left: 7,
        marginBottom: 5,
        marginHorizontal: 10
    },
    imageBig: {
        width: '92%',
        height: 250,
        borderRadius: 10,
        alignSelf:'center'
    },
    imageTextViewBig:{
        width: '92%',
        height: 70,
        marginTop: 180,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        position: 'absolute',
        backgroundColor: Colors.LIGHT_GREY,
        opacity: 0.8,
        alignSelf:'center',
    },
});
