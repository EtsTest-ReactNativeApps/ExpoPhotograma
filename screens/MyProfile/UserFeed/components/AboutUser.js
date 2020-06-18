import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../styles";
import {useDispatch, useSelector} from "react-redux";

export default function AboutUser({navigation} ) {
    const name = useSelector(state => state.user.name);
    const phone = useSelector(state => state.user.phone);
    const email = useSelector(state => state.user.email);

    return (
        <View style={styles.container}>
            <Text style={gs.title}>👤 {name}</Text>

            <View style={gs.divider} />
            <Text style={gs.title3}>My info:</Text>
            <Text style={{...gs.sectionTitle2, padding: 5}}>✉️ Email: {email}</Text>
            <Text style={{...gs.sectionTitle2, padding: 5}}>📱 Phone number: {phone}</Text>
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
