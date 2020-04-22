import * as React from 'react';
import { MonoText } from "./StyledText";
import { TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

export const ButtonSignIn = ({text, onPress, disabled, ...rest}) => (
        <TouchableOpacity
            {...rest}
            onPress={ onPress }>
            <MonoText style={{ color: Colors.BLUE_GREY, fontWeight: "bold" }}>{ text }</MonoText>
        </TouchableOpacity>
    );
