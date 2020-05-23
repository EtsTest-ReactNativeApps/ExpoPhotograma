import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {MonoText} from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import TabBarIcon from "../../../components/TabBarIcon";


export default function UserInfo() {
    return (
        <View style={styles.container}>
            <View style={styles.myCnt}>
                <MonoText style={styles.myCntBtnTitle}>ACCOUNT SETTINGS</MonoText>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <MonoText style={styles.statTitleBtn}>Personal information</MonoText>
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
                    <MonoText style={styles.statTitleBtn}>Preferences</MonoText>
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
                    <MonoText style={styles.statTitleBtn}>My Appointments </MonoText>
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
    myCnt:{
        borderBottomWidth: 1,
        borderBottomColor: Colors.BLUE_GREY,
        marginBottom: 20,
        marginLeft: -20,
        marginRight: -40

    },
    myCntBtnTitle: {
        color: Colors.WHITE,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: "bold",
        alignItems: "flex-start",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
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
