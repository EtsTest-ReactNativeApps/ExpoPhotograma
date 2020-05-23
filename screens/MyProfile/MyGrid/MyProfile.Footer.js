import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {MonoText} from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import TabBarIcon from "../../../components/TabBarIcon";


export default function MyProfileFooter() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <MonoText style={styles.statTitleBtn}>Become a photographer</MonoText>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <View style={styles.statBtn}>
                        <TabBarIcon style={styles.statTitleBtn2} name="md-person" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <MonoText style={styles.statTitleBtn}>Get Help</MonoText>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <View style={styles.statBtn}>
                        <TabBarIcon style={styles.statTitleBtn2} name="md-person" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <MonoText style={styles.statTitleBtn}>Log out </MonoText>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <View style={styles.statBtn}>
                        <TabBarIcon style={styles.statTitleBtn2} name="md-person" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    statBtn: {
        alignItems: "center",
        backgroundColor: Colors.LIGHT_GREY,
        height: 30,
        borderRadius: 20,
        width: 30,
        justifyContent: 'center',

    },
    statTitleBtn: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: "bold",
        alignItems: "center",
    },
    statTitleBtn2: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: "bold",
    }
});
