import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { gs, colors } from "../styles";
import {useDispatch} from "react-redux";
import {UserActions} from "../../../../redux/user";



export default function AmenitiesUser({ navigation }) {

    const dispatch = useDispatch();
    const onLogOut = React.useCallback(
        () => {
            dispatch(UserActions.logout());
        },
        [dispatch],
    );

    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Edit Information</Text>

            <View style={styles.amenitiesContainer}>
                <View style={styles.amenityContainer}>
                    <TouchableOpacity style={styles.amenity} onPress={()=> navigation.navigate("EditUserScreen")}>
                        <FontAwesome5 name="edit" size={24} color={colors.lightHl} style={{marginLeft: 5}}/>
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>Edit info</Text>
                </View>

                <TouchableOpacity style={styles.amenityContainer} onPress={onLogOut}>
                    <View style={styles.amenity}>
                        <Ionicons name="md-log-out" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>Log out</Text>
                </TouchableOpacity>

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
