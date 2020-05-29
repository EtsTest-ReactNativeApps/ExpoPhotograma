import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import { gs } from "../styles";


function Header ({ navigation, photographer }) {
    const avatar = photographer.attributes.avatar.url;
    {console.log("AVATAR: " + avatar)}

    const goToHome  = () => {
        navigation.navigate('Home')
    };

    return (
        <View>

            <View>
                <Image
                    source={{uri: avatar }}
                    style={{ width: "100%", height: 400 }} />
            </View>

            <View style={styles.topButtons}>
                <TouchableOpacity onPress={goToHome}>
                <AntDesign name="close" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={gs.rowCenter}>
                    <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight} />
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    topButtons: {
        ...gs.rowBetween,
        position: "absolute",
        top: 64,
        left: 32,
        right: 32
    },
    topButtonRight: {
        marginLeft: 12,
        color: "#fff"
    }
});
