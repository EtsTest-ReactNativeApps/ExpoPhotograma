import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
    },
    image:{
        width: '100%',
        height: 370,
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
        marginBottom: 30,
        marginLeft: 3
    },
    imageTextView:{
        width: '100%',
        height: 70,
        marginRight: 8,
        marginTop: 300,
        position: 'absolute',
        backgroundColor: Colors.LIGHT_GREY,
        opacity: 1,
    },
    imageTextView2:{
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
    makeAppointmentBtn: {
        position: 'absolute',
        right: 12,
        top: 335,
        backgroundColor: Colors.MY_RED,
        padding: 20,
        borderRadius: 40,
        zIndex: 10,
        elevation: 5
    },
    makeAppointmentText: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
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
    imageLocationPin:{
        position: 'absolute',
        marginTop: 5,
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
        left: 25,
        bottom: 8,
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
        height: 75,
        marginTop: 245,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        position: 'absolute',
        backgroundColor: Colors.LIGHT_GREY,
        opacity: 0.8,
        alignSelf:'center',
    },

});
