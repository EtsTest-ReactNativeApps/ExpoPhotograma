import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import MyAvatar from "./MyAvatar";
import {Explore} from "./MyGrid/Explore";

export default class MyProfile extends React.Component {
    state = {
        user: {}
    };

    render() {
        return (
            <View style={styles.container}>
                <MyAvatar/>
                <Explore/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SEMI_BLACK
    }
});
