import * as React from 'react';
import { MonoText } from "./StyledText";
import { TouchableOpacity} from "react-native";

export const ButtonSignIn = ({text, onPress, disabled, ...rest}) => (
        <TouchableOpacity
            {...rest}
            onPress={ onPress }>
            <MonoText style={{ color: "#FFF", fontWeight: "500" }}>{ text }</MonoText>
        </TouchableOpacity>
    );
