import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../styles";
import {useDispatch, useSelector} from "react-redux";

export default function AboutUser({navigation} ) {
    const name = useSelector(state => state.user.data.name);
    const phone = useSelector(state => state.user.data.phone);
    const photographer = useSelector(state => state.user.photographerInfo);
    const photographerAddress = useSelector(state => state.user.photographerAddress);

    {console.log(photographerAddress)}
    return (
        <View style={styles.container}>
            <Text style={gs.title}>My Profile 👤</Text>
            <Text style={gs.title2}>{name}</Text>
            <View style={gs.divider} />

            <Text style={gs.sectionTitle}>Phone number {phone}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    }
});
