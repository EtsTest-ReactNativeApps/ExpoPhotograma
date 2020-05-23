import * as React from 'react';
import { ScrollView, StyleSheet} from "react-native";
import { colors } from "../styles";

import MyProfile from "./MyProfile";
import PhotographerFeed from "./PhotographerFeed/PhotographerFeed";

export const MyProfileScreen = ({ navigation }) => {
    return(
        <ScrollView style={styles.container}>
            <PhotographerFeed navigation={navigation}/>
        </ScrollView>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222",
    },
});

