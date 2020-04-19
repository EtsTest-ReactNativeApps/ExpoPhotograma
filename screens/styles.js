import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SEMI_BLACK
    },
    contentContainer_SignUp: {
        paddingTop: 15,
        paddingBottom: 100,
    },
    greeting_SignUp: {
        marginTop: 320,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        color: Colors.WHITE
    },
    form_SignUp: {
        marginTop: 30,
        marginBottom: 40,
        marginHorizontal: 30
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: Colors.WHITE,
        borderRadius: 4,
        marginTop: 30,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: Colors.WHITE,
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    back: {
        position: "absolute",
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar_SignUp: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 220,
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer_SignIn: {
        paddingTop: 15,
    },
    greeting_SignIn: {
        marginTop: 250,
        marginBottom:10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        color: Colors.LIGHT_GREY
    },
    form_SignIn: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    buttonSignIn:{
        backgroundColor: Colors.BLUE_GREY,
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
