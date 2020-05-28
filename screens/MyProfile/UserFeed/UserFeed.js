import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "../PhotographerFeed/styles";
import HeaderUser from "./components/HeaderUser";
import AmenitiesUser from "./components/AmenitiesUser";
import AboutUser from "./components/AboutUser";



export default function UserFeed({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <HeaderUser navigation={navigation}/>

            <View>
                <AboutUser navigation={navigation}/>
                <AmenitiesUser navigation={navigation}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});
