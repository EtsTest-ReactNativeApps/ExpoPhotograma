import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../styles";
import {useDispatch, useSelector} from "react-redux";

export default function AboutUserPhotographer({photographer, navigation} ) {
    const name = useSelector(state => state.user.data.name);
    const email = useSelector(state => state.user.data.email);
    const phone = useSelector(state => state.user.data.phone);
    const photographerAddress = useSelector(state => state.user.photographerAddress);

    {console.log(photographer)}
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{name}</Text>
            <View style={gs.divider} />
            <Text style={gs.title3}>My info:</Text>
            <Text style={gs.sectionTitle}>Email:  {email}</Text>
            <Text style={gs.sectionTitle}>Phone number:  {phone}</Text>
            <Text style={gs.sectionTitle}>City:  {photographerAddress.city}</Text>
            <Text style={gs.sectionTitle}>Region:  {photographerAddress.region}</Text>
            <Text style={gs.sectionTitle}>Camera Description :  {photographer.cameraDescription}</Text>
            <Text style={gs.sectionTitle}>Price:  {photographer.price}$</Text>
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
