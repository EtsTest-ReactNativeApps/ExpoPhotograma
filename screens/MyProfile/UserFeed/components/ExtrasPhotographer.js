import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { gs, colors } from "../styles";
import {useDispatch} from "react-redux";
import {UserActions} from "../../../../redux/user";

export default function ExtrasPhotographer({ navigation }) {

    const dispatch = useDispatch();
    const onLogOut = React.useCallback(
        () => {
            dispatch(UserActions.logout());
        },
        [dispatch],
    );
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: -40 }}>
                <TouchableOpacity style={styles.filterButton} onPress={onLogOut}>
                    <Text style={{ fontWeight: "700", color: "#fff" }}>Log out</Text>
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
