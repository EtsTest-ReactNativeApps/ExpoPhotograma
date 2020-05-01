import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import MyPhotoAvatar from "./MyPhotoAvatar";
import MyFollowers from "./MyFollowers";


export default function MyAvatar() {
    return (
            <View style={styles.container}>
                <MyPhotoAvatar/>
            </View>
        );
}


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.BLUE_GREY
    }
});
