import {StatusBar, StyleSheet, View} from "react-native";
import Header from "../MyProfile/PhotographerFeed/components/Header";
import Bookmark from "../MyProfile/PhotographerFeed/components/Bookmark";
import About from "../MyProfile/PhotographerFeed/components/About";
import Stats from "../MyProfile/PhotographerFeed/components/Stats";
import Address from "../MyProfile/PhotographerFeed/components/Address";
import Amenities from "../MyProfile/PhotographerFeed/components/Amenities";
import Extras from "../MyProfile/PhotographerFeed/components/Extras";
import {colors} from "../MyProfile/PhotographerFeed/styles";
import React from "react";
import {Profiles} from "./index";
import type {Profile} from "./Profile";

const profiles: Profile[] = [
    {
        id: "1",
        name: "Caroline",
        age: 24,
        profile: require("../../assets/images/black_interesting.png"),
    },
    {
        id: "2",
        name: "Jack",
        age: 30,
        profile: require("../../assets/images/black_interesting1.png"),
    },
    {
        id: "3",
        name: "Anet",
        age: 21,
        profile: require("../../assets/images/black_interesting3.png"),
    },
    {
        id: "4",
        name: "John",
        age: 28,
        profile: require("../../assets/images/black_interesting4.png"),
    },
];


export default function FavoritesFeed() {
    return (
        <View style={styles.container}>
            <Profiles {...{ profiles }} />

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});
