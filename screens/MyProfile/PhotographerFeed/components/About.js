import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../../../redux/user";

const hotel = {
    name: "Nicoleta Ungur ",
    price: "$10/h",
    location: "Cluj-Napoca",
    about:
        "Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros..." +
        " Nullam aliquam interdum ipsum et tempor. Phasellus odio felis, scelerisque eu purus quis."
};

export default function About( {navigation} ) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(UserActions.info());
    }, [dispatch]);

    const name = useSelector(state => state.user.data.name);
    const phone = useSelector(state => state.user.data.phone);
    const photographer = useSelector(state => state.user.photographerInfo);
    const role = useSelector(state => state.user.role);
    const photographerAddress = useSelector(state => state.user.photographerAddress);

    {console.log(photographerAddress)}
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{name}</Text>

            <Text style={styles.info}>
                {photographer.price}$ &#8226; {photographerAddress.city} &#8226; {phone}
            </Text>

            <View style={gs.divider} />

            <Text style={gs.sectionTitle}>About {name}</Text>
            <Text style={styles.about}>{photographer.description}</Text>
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
