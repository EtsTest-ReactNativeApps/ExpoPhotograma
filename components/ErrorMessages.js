
import React from 'react'
import { View, StyleSheet } from 'react-native'
import {MonoText} from "./StyledText";
import Colors from "../constants/Colors";

export const ErrorMessage = ({ errorValue }) => (
    <View style={styles.container}>
        <MonoText style={styles.errorText}>{errorValue}</MonoText>
    </View>
);

const styles = StyleSheet.create({
    errorText: {
        color: Colors.MY_RED
}
});

