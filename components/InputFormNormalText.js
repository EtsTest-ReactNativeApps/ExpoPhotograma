import React from "react";
import {MonoText} from "./StyledText";
import {StyleSheet, TextInput, View} from "react-native";


export default class InputFormNormalText extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
                <View style={{ marginTop: 32 }}>
                    <MonoText style={styles.inputTitle}>{this.props.name}</MonoText>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                    />
                </View>
        )}
}

const styles = StyleSheet.create({

    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    }
});
