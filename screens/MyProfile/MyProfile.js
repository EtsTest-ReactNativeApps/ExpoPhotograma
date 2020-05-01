import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import MyAvatar from "./MyAvatar";
import { LinearGradient } from "expo-linear-gradient";
import UserInfo from "./MyGrid/UserInfo";
import MyProfileFooter from "./MyGrid/MyProfile.Footer";
import MyFollowers from "./MyFollowers";


export default class MyProfile extends React.Component {
    state = {
        user: {}
    };

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[Colors.VALENCIA, 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 600,
                    }}
                />
                <MyAvatar/>
                <UserInfo/>
                <MyProfileFooter/>
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
