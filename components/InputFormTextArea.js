import React from "react";
import {MonoText} from "./StyledText";
import { TextInput, View, StyleSheet} from "react-native";
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import {styles} from "./globalStyle";


export const InputFormTextArea = ({ name, value, placeholder, placeholderTextColor, ...rest}) => (
    <View style={{ marginTop: 32 }}>
        <MonoText style={{...styles.inputTitle, marginBottom: 10}}>{ name }</MonoText>
        <AutoGrowingTextInput
            {...rest}
            style={styles.input}
            autoCapitalize="none"
            name= { name }
            value= { value }
            placeholder= {placeholder}
            placeholderTextColor= {placeholderTextColor}
        />
    </View>
);
