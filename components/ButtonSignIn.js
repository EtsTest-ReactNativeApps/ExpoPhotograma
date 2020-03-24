import * as React from 'react';
import { MonoText } from "./StyledText";
import { TouchableOpacity} from "react-native";
import { styles } from './globalStyle'


export const ButtonSignIn = ({text, onPress, ...rest}) => (
        <TouchableOpacity
            {...rest}
            style={styles.button}
            onPress={ onPress }>
            <MonoText style={{ color: "#FFF", fontWeight: "500" }}>{ text }</MonoText>
        </TouchableOpacity>
    );
