import React from "react";
import {MonoText} from "./StyledText";
import { TextInput, View} from "react-native";
import { styles } from './globalStyle'

export const InputFormNormalText = ({ name, value, placeholder,placeholderTextColor, ...rest}) => (
            <View style={{ marginTop: 32 }}>
                <MonoText style={styles.inputTitle}>{ name }</MonoText>
                <TextInput
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
