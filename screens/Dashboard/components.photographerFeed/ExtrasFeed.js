import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { gs, colors } from "/Users/nicoletaungur/ExpoPhotograma/screens/MyProfile/PhotographerFeed/styles.js";

export default function ExtrasFeed({ navigation, attractions, city }) {

    return (
        <View style={styles.container}>
            <Text style={styles.mySectionTitle}>Attractions in {city}</Text>

            <View style={styles.list}>
                {attractions.map((extra, key) => {
                    return (
                        <Text style={styles.listItem} key={key}>
                            &mdash; {extra}
                        </Text>
                    );
                })}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 25
    },
    list: {
        marginTop: 16,
        marginLeft: 8
    },
    listItem: {
        color: colors.textSec,
        marginVertical: 8
    },
    filterButton: {
        ...gs.button,
        paddingVertical: 16
    },
    mySectionTitle: {
        fontWeight: "700",
        color: colors.text,
        fontSize: 18,
        marginLeft: -10
    },
});
