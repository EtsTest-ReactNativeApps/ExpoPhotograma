import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./styles";
import Header from "./components/Header";
import Bookmark from "./components/Bookmark";
import About from "./components/About";
import Stats from "./components/Stats";
import Amenities from "./components/Amenities";
import Extras from "./components/Extras";
import Address from "./components/Address";
import Photos from "./components/Photos";


export default function PhotographerFeed({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Header navigation={navigation}/>

            <View>
                <About navigation={navigation}/>
                <Stats navigation={navigation}/>
                <Photos navigation={navigation}/>
                <Address navigation={navigation}/>
                <Amenities navigation={navigation}/>
                <Extras navigation={navigation}/>
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
