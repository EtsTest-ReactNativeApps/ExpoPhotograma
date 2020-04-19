import * as React from 'react';
import {View} from "react-native";
import {MonoText} from "../../components/StyledText";
import Colors from "../../constants/Colors";

export const Chat = () => {
    return(
        <View style={{flex: 1, backgroundColor: Colors.SEMI_BLACK }}>
            <MonoText style= {{color: Colors.WHITE,  marginTop: 100, marginLeft: 20 }}>
                CHAT
            </MonoText>
        </View>
    )
};
