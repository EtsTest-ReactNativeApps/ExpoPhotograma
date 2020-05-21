import React, {useState} from "react";

import {View, Button, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, TextInput, Text} from "react-native";
import {styles} from './photographerFeedDash.style';
import {Feather} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const PhotographerFeedDash = ({ route, navigation }) =>{

    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}

    const goToHome  = () => {
        navigation.goBack()
    };

    return (
        <View style = {styles.container}>
            <View>
                <ImageBackground
                    source={ image }
                    style = {styles.image}
                    imageStyle = {{borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
                >
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
                            borderRadius: 40}}>
                        <Feather name='heart' size={30} color={Colors.WHITE}/>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    );
};

export default PhotographerFeedDash;
