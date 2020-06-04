import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { gs, colors } from "../styles";

export default function Extras({ navigation, photographer }) {
    const extras = [
        "Payment at Checkout",
        "No Refunds"
    ];
    console.log("Extras photographer " + photographer.attributes.id);
    const goToCalendar  = () => {
        navigation.navigate("BookingCalendarScreen", {photographer: photographer.attributes.id})};


    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you go</Text>

            <View style={styles.list}>
                {extras.map((extra, key) => {
                    return (
                        <Text style={styles.listItem} key={key}>
                            &mdash; {extra}
                        </Text>
                    );
                })}
            </View>

            <View style={{ marginTop: 32, marginBottom: -40 }}>
                <TouchableOpacity style={styles.filterButton} onPress={goToCalendar}>
                    <Text style={{ fontWeight: "700", color: "#fff" }}>Book a photo shooting</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 64
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
    }
});
