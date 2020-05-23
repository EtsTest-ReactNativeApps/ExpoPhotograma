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
        marginBottom: 30
    },
    imageTextView:{
        width: '100%',
        height: 70,
        marginRight: 8,
        marginTop: 400,
        position: 'absolute',
        backgroundColor: Colors.LIGHT_GREY,
        opacity: 0.7
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
    }

});
