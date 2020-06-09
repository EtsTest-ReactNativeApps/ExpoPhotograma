import * as React from 'react';
import { ScrollView, StyleSheet} from "react-native";
import UserFeed from "./UserFeed/UserFeed";


export const MyProfileScreen = ({ navigation }) => {
    return(
        <ScrollView style={styles.container}>
            <UserFeed navigation={navigation}/>
        </ScrollView>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222",
    },
});

