import React from "react";
import {styles} from './photographerFeed.style';
import {Feather} from "@expo/vector-icons/build/Icons";
import Colors from "../../../constants/Colors";
import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Bookmark from "../../MyProfile/PhotographerFeed/components/Bookmark";

const HeaderPhotographerFeed = ({navigation}) => {

    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}

    const goToHome  = () => {
        navigation.goBack()
    };


    return (
        <View>
            <ImageBackground
                source={ image }
                style = {styles.image}>
                <View style = {styles.imageTextView}>
                    <Text style = {styles.tagLine}> Photographer name</Text>
                    <Text style = {styles.placeName}> Location</Text>
                </View>

                <TouchableOpacity
                    onPress={goToHome}
                    style ={{
                        position:'absolute',
                        left: 20,
                        top: 50,
                        padding: 10,
                        borderRadius: 40}}>
                    <Feather name='arrow-left' size={22} color={Colors.WHITE}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style ={{
                        position:'absolute',
                        right: 20,
                        top: 50,
                        padding: 10,
                        backgroundColor:Colors.LIGHT_GREY,
                        borderRadius: 40}}>
                    <Feather name='heart' size={30} color={Colors.MY_RED}/>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    );
};

export default HeaderPhotographerFeed;
