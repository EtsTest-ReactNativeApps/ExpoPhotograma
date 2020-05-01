import React from "react";
import { StyleSheet } from "react-native";

import {Listing} from "./Listing";
import Colors from "../../../constants/Colors";
import {ScrollView} from "react-native";

const listings = [
    {
        id: "tiny-home",
        title: "Tiny Home",
        subtitle: "Entire Flat · 1 Bed",
        picture: require("/Users/nicoletaungur/ExpoPhotograma/assets/images/black_interesting1.png"),
        rating: 4.93,
        ratingCount: 861
    },
    {
        id: "cook-house",
        title: "Cook House",
        subtitle: "Entire Flat · 1 Bed",
        picture: require("/Users/nicoletaungur/ExpoPhotograma/assets/images/black_interesting.png"),
        rating: 4.93,
        ratingCount: 861
    }
];


export const Explore = ({}) => {
    return (
        <ScrollView style={styles.container}>
            {listings.map(listing => (
                <Listing key={listing.id}
                        id={listing.id}
                         picture={listing.picture}/>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.SEMI_BLACK,
        zIndex: -1
    }
});
