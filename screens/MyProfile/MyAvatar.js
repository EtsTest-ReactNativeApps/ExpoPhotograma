import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import {MonoText} from "../../components/StyledText";
import Colors from "../../constants/Colors";
import {useSelector} from "react-redux";
import {} from "react-native";


export default function MyAvatar() {
    const avatar = useSelector(state => state.user.data.avatar);
    const name = useSelector(state => state.user.data.name);
    const followers = useSelector(state => state.user.data.followers_count);
    const followees = useSelector(state => state.user.data.followees_count);

    return (
            <View style={styles.container}>
                <View style={{ marginTop: 64, alignItems: "center" }}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{uri: avatar }}
                            style={styles.avatar}
                        />
                    </View>
                    <MonoText style={styles.name}>{name}</MonoText>
                </View>
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
                        <MonoText style={styles.statTitleBtn}>Followers</MonoText>
                    </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress = {() => alert("TODO")}>
                        <View style={styles.statBtn}>
                            <MonoText style={styles.statTitleBtn}>Following</MonoText>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
}


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.BLUE_GREY
    },
    profile: {
        marginTop: 100,
        alignItems: "center"
    },
    avatarContainer: {
        shadowColor: Colors.BLUE_GREY,
        shadowRadius: 10,
        shadowOpacity: 0.4,
    },
    avatar: {
        marginTop: 40,
        width: 180,
        height: 180,
        borderRadius: 100
    },
    name: {
        marginTop: 30,
        fontSize: 16,
        fontWeight: "600",
        color: Colors.WHITE
    },
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
