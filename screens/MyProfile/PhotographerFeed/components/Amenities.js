import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { gs, colors } from "../styles";

export default function Amenities({ navigation }) {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amenities</Text>

            <View style={styles.amenitiesContainer}>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <FontAwesome5 name="tripadvisor" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>3 locations</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Ionicons name="md-camera" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>Digital Photos</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <FontAwesome5 name="images" size={20} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>10 Physical Photos</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    amenitiesContainer: {
        marginTop: 16,
        marginHorizontal: 16,
        ...gs.rowBetween,
        flexWrap: "wrap"
    },
    amenityContainer: {
        alignItems: "center",
        width: 95,
        marginVertical: 12
    },
    amenity: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        ...gs.center,
        backgroundColor: "#444"
    },
    amenityName: {
        color: colors.lightHl,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 6,
        textAlign: "center"
    }
});
