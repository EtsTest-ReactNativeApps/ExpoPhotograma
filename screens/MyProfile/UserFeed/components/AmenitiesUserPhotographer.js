import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { gs, colors } from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {AppointmentActions} from "../../../../redux/appointments";


export default function AmenitiesUserPhotographer({ navigation }) {
    const dispatch = useDispatch();

    const photographerInfo = useSelector(state => state.user.photographerInfo);

    React.useEffect(() => {
        dispatch(AppointmentActions.getAppointmentsForCurrentUser(photographerInfo.id));
    }, [dispatch]);

    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitlePhotographer}>Edit Information 📷</Text>

            <View style={styles.amenitiesContainer}>
                <View style={styles.amenityContainer}>
                    <TouchableOpacity style={styles.amenity} onPress={()=> navigation.navigate("EditScreen")}>
                        <FontAwesome5 name="camera" size={24} color={colors.lightHl} />
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>Edit photographer</Text>
                </View>


                <TouchableOpacity style={styles.amenityContainer} onPress={()=> navigation.navigate("FutureAppointmentsScreen")}>
                    <View style={styles.amenity}>
                        <FontAwesome5 name="bookmark" size={20} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>{`Future \n Appointments`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.amenityContainer} onPress={()=> navigation.navigate("EditUserScreen")}>
                    <View style={styles.amenity}>
                        <Ionicons name="md-create" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>{`Edit \n Information`}</Text>
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
