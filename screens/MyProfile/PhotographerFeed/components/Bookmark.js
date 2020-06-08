import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Feather, Ionicons} from "@expo/vector-icons";
import { gs, colors } from "../styles";

export default function Bookmark({navigation , photographer}) {
    const [liked, setLiked] = React.useState(false);

    return (
        <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.bookmark}>
            {liked ? <Ionicons name="ios-heart" size={32} color={colors.pink} style={{marginTop: 5}}/>
            :
                <Ionicons name="ios-heart-empty" size={32} color={colors.pink} style={{marginTop: 5}}/>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bookmark: {
        position: "absolute",
        width: 56,
        height: 56,
        right: 32,
        top: -56 / 2,
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius: 56 / 2,
        zIndex: 10
    }
});
