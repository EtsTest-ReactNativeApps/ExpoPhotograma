import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { gs } from "../styles";

// Please use your own photos here
const photos = [
    require("../../../../assets/travel1.jpg"),
    require("../../../../assets/travel2.jpg"),
    require("../../../../assets/travel3.jpg"),
    require("../../../../assets/travel4.jpg"),
    require("../../../../assets/travel5.jpg"),
    require("../../../../assets/travel6.jpg"),
    require("../../../../assets/travel7.jpg"),
    require("../../../../assets/travel8.jpg"),
];

export default function Photos() {
    return (
        <View style={[gs.sectionContainer, { marginTop: 8 }]}>
            <Text style={gs.sectionTitle}>My Photos</Text>

            <View style={styles.photosContainer}>
                {photos.map((photo, index) => {
                    return (
                        <Image
                            source={photo}
                            key={index}
                            style={[
                                styles.photo,
                                {
                                    marginRight: (index + 1) % 3 === 0 ? 0 : 12,
                                },
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
    },
    photo: {
        width: 108,
        height: 108,
        marginBottom: 12,
        borderRadius: 8,
    },
});
