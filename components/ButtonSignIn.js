import * as React from 'react';
import { MonoText } from "./StyledText";
import { TouchableOpacity} from "react-native";
import { styles } from './globalStyle'
import Colors from "../constants/Colors";


export const ButtonSignIn = ({text, onPress, disabled, ...rest}) => (
        <TouchableOpacity
            {...rest}
            style={styles.button}
            color={ disabled ? "#323441" : Colors.tintColor}
            onPress={ onPress }>
            <MonoText style={{ color: "#FFF", fontWeight: "500" }}>{ text }</MonoText>
        </TouchableOpacity>
    );
