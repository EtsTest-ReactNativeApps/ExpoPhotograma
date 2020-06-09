import * as React from 'react';
import { ScrollView, StyleSheet} from "react-native";

import PhotographerFeed from "./PhotographerFeed/PhotographerFeed";

export const MyPhotographerFeedScreen = ({route, navigation }) => {
    const { photographer } = route.params;
    return(
        <ScrollView style={styles.container}>
            <PhotographerFeed photographer={photographer} navigation={navigation}/>
        </ScrollView>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222",
    },
});

