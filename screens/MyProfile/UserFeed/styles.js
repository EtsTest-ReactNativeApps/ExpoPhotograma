import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const colors = {
    darkBg: "#222",
    lightBg: "#333",
    darkHl: "#666",
    lightHl: "#888",
    pink: Colors.MY_RED,
    orange: Colors.VALENCIA,
    text: "#fff",
    textSec: "#aaa",
};

export const gs = StyleSheet.create({
    sectionContainer: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: colors.lightBg,
    },
    sectionTitle: {
        fontWeight: "700",
        color: colors.text,
        fontSize: 15,
    },
    sectionTitlePhotographer: {
        fontWeight: "700",
        color: Colors.MY_RED,
        fontSize: 15,
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24,
    },
    title: {
        color: colors.text,
        fontSize: 30,
    },
    title2: {
        color: colors.text,
        fontSize: 24,
        marginTop: 5
    },

    title3: {
        color: Colors.MY_RED,
        fontSize: 22,
        marginBottom: 10
    },
    subTitle: {
        fontWeight: "600",
        textTransform: "uppercase",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 15,
        letterSpacing: 1,
    },
    smallText: {
        fontSize: 12,
        fontWeight: "800",
        color: colors.text,
    },
    absoluteFull: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.pink,
        borderRadius: 100,
    },
});
