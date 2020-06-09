import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { gs, colors } from "../styles";

export default function ExtrasUser({ navigation }) {
    const goToCalendar  = () => {
        navigation.navigate("BookingCalendarScreen")};


    return (
        <View style={styles.container}>
            <View style={{ marginBottom: -40 }}>
                <TouchableOpacity style={styles.filterButton} onPress={goToCalendar}>
                    <Text style={{ fontWeight: "700", color: "#fff" }}>Become a photographer</Text>
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
