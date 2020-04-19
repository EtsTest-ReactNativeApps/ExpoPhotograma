import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import MyAvatar from "../MyAvatar";

export default class MyPhotos extends React.Component {
    state = {
        user: {}
    };

    render() {
        return (
            <View style={styles.container}>
                <MyAvatar/>
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
