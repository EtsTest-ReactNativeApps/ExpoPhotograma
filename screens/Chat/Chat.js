import * as React from 'react';
import {StyleSheet, View} from "react-native";
import {MonoText} from "../../components/StyledText";
import Colors from "../../constants/Colors";

export const Chat = () => {
    return(
        <View style={styles.container}>
            <MonoText style= {{color: Colors.WHITE,  marginTop: 100, marginLeft: 20 }}>
                CHAT
            </MonoText>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
