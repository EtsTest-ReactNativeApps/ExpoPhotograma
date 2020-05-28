import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import { colors } from "./styles";
import Header from "./components/Header";
import About from "./components/About";
import Stats from "./components/Stats";
import Amenities from "./components/Amenities";
import Extras from "./components/Extras";
import Address from "./components/Address";
import Photos from "./components/Photos";


export const PhotographerFeed = ({route, navigation}) =>{

    const { photographer } = route.params;
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Header photographer={photographer} navigation={navigation}/>

            <View>
                <About photographer={photographer} navigation={navigation}/>
                <Stats photographer={photographer} navigation={navigation}/>
                <Photos photographer={photographer} navigation={navigation}/>
                <Address photographer={photographer} navigation={navigation}/>
                <Amenities photographer={photographer} navigation={navigation}/>
                <Extras photographer={photographer} navigation={navigation}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});
