import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../styles";
import {useDispatch} from "react-redux";
import {UserActions} from "../../../../redux/user";


function About ({photographer,  navigation }) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(UserActions.info());
    }, [dispatch]);

    const name = photographer.attributes.name;
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{name}</Text>

            <Text style={styles.info}>
                {photographer.attributes.price}$ &#8226; {photographer.attributes.city} &#8226; {photographer.attributes.cameraDescription}
            </Text>

            <View style={gs.divider} />

            <Text style={gs.sectionTitle}>About {name}</Text>
            <Text style={styles.about}>{photographer.attributes.description}</Text>
        </View>
    );
}

export default About;

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
