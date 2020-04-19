import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {MonoText} from "../../components/StyledText";
import Colors from "../../constants/Colors";

export default class MyAvatar extends React.Component {
    state = {
        user: {}
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 64, alignItems: "center" }}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={
                                this.state.user.avatar
                                    ? { uri: this.state.user.avatar }
                                    : require("../../assets/images/black_interesting4.png")
                            }
                            style={styles.avatar}
                        />
                    </View>
                    <MonoText style={styles.name}>Nicoleta Ungur</MonoText>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <MonoText style={styles.statAmount}>21</MonoText>
                        <MonoText style={styles.statTitle}>Posts</MonoText>
                    </View>
                    <View style={styles.stat}>
                        <MonoText style={styles.statAmount}>981</MonoText>
                        <MonoText style={styles.statTitle}>Followers</MonoText>
                    </View>
                    <View style={styles.stat}>
                        <MonoText style={styles.statAmount}>63</MonoText>
                        <MonoText style={styles.statTitle}>Following</MonoText>
                    </View>
                </View>
            </View>
        );
    }
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
        marginBottom: 20,

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
    }
});
