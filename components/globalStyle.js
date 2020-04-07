import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export const styles = StyleSheet.create({

    inputTitle: {
        color: Colors.LIGHT_GREY,
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: Colors.LIGHT_GREY,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: Colors.LIGHT_GREY
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#323441",
        borderRadius: 35,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});
