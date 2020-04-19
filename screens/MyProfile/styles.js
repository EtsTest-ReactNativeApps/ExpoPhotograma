import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get('window');


export const myProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SEMI_BLACK
    },
    contentContainer: {
        paddingTop: 100,
        paddingBottom: 100,
        marginTop: 100
    },
    secondContainer: {
        marginTop: 120,
        marginBottom: 40,
        marginHorizontal: 40,
        alignItems: 'flex-start'
    },
    myAvatar:{
        height: 100,
        width: 100,
        backgroundColor: Colors.LIGHT_GREY,
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    myName: {
        backgroundColor: Colors.LIGHT_GREY,
        borderRadius: 25,
        width: width / 2,
        alignItems: "center",
        justifyContent: "center"
    }
});
