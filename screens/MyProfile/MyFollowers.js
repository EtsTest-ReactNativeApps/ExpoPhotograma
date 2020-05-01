import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {MonoText} from "../../components/StyledText";
import Colors from "../../constants/Colors";
import {useSelector} from "react-redux";


export default function MyFollowers() {
    const followers = useSelector(state => state.user.data.followers_count);
    const followees = useSelector(state => state.user.data.followees_count);

    return (
        <>
        <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <MonoText style={styles.statAmount}>21</MonoText>
                    <MonoText style={styles.statTitle}>Photos</MonoText>
                </View>
                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <View style={styles.stat}>
                        <MonoText style={styles.statAmount}>{followers}</MonoText>
                        <MonoText style={styles.statTitle}>Followers</MonoText>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <View style={styles.stat}>
                        <MonoText style={styles.statAmount}>{followees}</MonoText>
                        <MonoText style={styles.statTitle}>Following</MonoText>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.buttonsContainer}>

                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <View style={styles.statBtn}>
                        <MonoText style={styles.statTitleBtn}>Follow</MonoText>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress = {() => alert("TODO")}>
                    <View style={styles.statBtn}>
                        <MonoText style={styles.statTitleBtn}>Message</MonoText>
                    </View>
                </TouchableWithoutFeedback>
            </View>
    </>
    );
}


const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 5,

    },
    stat: {
        alignItems: "center",
        flex: 1,
        marginTop:10
    },
    statAmount: {
        color: Colors.SEMY_GREY,
        fontSize: 18,
        fontWeight: "300"
    },
    statTitle: {
        color: Colors.WHITE,
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    statBtn: {
        alignItems: "center",
        flex: 1,
        marginTop:10,
        backgroundColor: Colors.LIGHT_GREY,
        height: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 35,
    },
    statTitleBtn: {
        color: Colors.SEMI_BLACK,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 4,
        alignItems: "center"
    },
});
