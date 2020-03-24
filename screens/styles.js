import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
        paddingBottom: 100,
    },
    greeting: {
        marginTop: 320,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        color: "#323441"
    },
    form: {
        marginTop: 50,
        marginHorizontal: 30
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#323441",
        borderRadius: 4,
        marginTop: 50,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#323441",
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
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 220,
        justifyContent: "center",
        alignItems: "center"
    },
    container_SignIn: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer_SignIn: {
        paddingTop: 15,
    },
    greeting_SignIn: {
        marginTop: 250,
        marginBottom:50,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    form_SignIn: {
        marginBottom: 48,
        marginHorizontal: 30
    }
});
