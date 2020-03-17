import * as React from 'react';
import {MonoText} from "./StyledText";
import {StyleSheet, TouchableOpacity} from "react-native";


export default function ButtonSignIn(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <MonoText style={{ color: "#FFF", fontWeight: "500" }}>{props.text}</MonoText>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        marginHorizontal: 30,
        backgroundColor: "#323441",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});
