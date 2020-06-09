import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import { colors } from "./styles";
import Header from "./components/Header";
import About from "./components/About";
import Stats from "./components/Stats";
import Amenities from "./components/Amenities";
import Extras from "./components/Extras";
import Address from "./components/Address";
import Photos from "./components/Photos";
import {useDispatch, useSelector} from "react-redux";
import {PhotosActions} from "../../../redux/photos";
import AboutSecond from "./components/AboutSecond";
import Bookmark from "./components/Bookmark";
import {HashtagActions} from "../../../redux/hashtags";


export const PhotographerFeed = ({route, navigation}) =>{

    const { photographer } = route.params;

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(PhotosActions.photosByPhotographer(photographer.attributes.id));
    }, [dispatch]);


    React.useEffect(() => {
        dispatch(HashtagActions.getHashtagsForPhotographer(photographer.attributes.id));
    }, [dispatch]);

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Header photographer={photographer} navigation={navigation}/>

            <View>
                <About photographer={photographer} navigation={navigation}/>
                <Bookmark photographer={photographer} navigation={navigation}/>
                <Stats photographer={photographer} navigation={navigation}/>
                <AboutSecond photographer={photographer} navigation={navigation}/>
                <Photos photographer={photographer} navigation={navigation}/>
                <Address photographer={photographer} navigation={navigation}/>
                <Amenities photographer={photographer} navigation={navigation}/>
                <Extras photographer={photographer} navigation={navigation}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});
