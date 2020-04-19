import React from "react";
import { Dimensions, Image, StyleSheet,  View } from "react-native";
import Colors from "../../../constants/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");


export const Listing = ({ id, picture }) => {
    return (
    <TouchableWithoutFeedback>
        <View key={id} style={styles.listing}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "stretch",

            }}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={picture}/>
            </View>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={picture}/>
            </View>
            </View>
        </View>

    </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    listing: {
        marginBottom: 10,
    },
    imgContainer: {
        borderWidth: 3,
        margin: 3,
        borderColor: Colors.BLUE_GREY,
        height: width / 2.1,
        width: width / 2.1},
    image: {
        flex: 1,
        height: null, width: null,
    }
});
