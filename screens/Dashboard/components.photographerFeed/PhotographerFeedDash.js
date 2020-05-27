import React, {useState} from "react";

import {View, Button, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, TextInput, Text} from "react-native";
import {styles} from './photographerFeed.style';
import {Feather} from "@expo/vector-icons/build/Icons";
import Colors from "../../../constants/Colors";
import HeaderPhotographerFeed from "./Header";

const PhotographerFeedDash = ({ route, navigation }) =>{
    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}

    const goToHome  = () => {
        navigation.goBack()
    };

    const { city } = route.params;
    const { cityDescription } = route.params;

    const [gallery, setgallery] =  React.useState([
        {
            title: 'Cluj-Napoca',
            key: '1',
            image:
                {uri : 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'}

        },{
            title: 'Cluj-Napoca',
            key: '2',
            image:
                {uri : 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIyMjh9&auto=format&fit=crop&w=634&q=80'}

        },
        {
            title: 'Cluj-Napoca',
            key: '3',
            image:
                {uri : 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}

        },{
            title: 'Cluj-Napoca',
            key: '4',
            image:
                {uri : 'https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80'}

        }]);

    {console.log("CITY " + city)}
    return (
        <View style = {styles.container}>
            <View>
                <ImageBackground
                    source={ image }
                    style = {styles.image}>
                    <View style = {styles.imageTextView}>
                        <Text style = {styles.tagLine}> {city}</Text>
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


                <TouchableOpacity style={styles.makeAppointmentBtn}>
                    <Text style={styles.makeAppointmentText}>Book</Text>
                </TouchableOpacity>

                <ScrollView style={{backgroundColor: Colors.DARK}}>
                    <View style={{paddingBottom: 400}}>

                    <Text
                        style={{
                            padding: 14,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: Colors.BEJ,
                            }}>
                        City Description
                    </Text>
                    <Text
                        style={{
                            color: Colors.WHITE,
                            opacity: 0.3,
                            paddingHorizontal: 14,
                            fontSize: 14,
                            fontWeight: 'normal',
                            justifyContent: 'flex-start',
                            textAlign: 'justify',
                            lineHeight: 26
                        }}>
                        {cityDescription}
                    </Text>
                        <Text
                        style={{
                            padding: 14,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: Colors.BEJ,
                        }}>
                        Camera description
                    </Text>
                        <Text
                            style={{
                                color: Colors.WHITE,
                                opacity: 0.3,
                                paddingHorizontal: 14,
                                fontSize: 14,
                                fontWeight: 'normal',
                                justifyContent: 'flex-start',
                                textAlign: 'justify',
                                lineHeight: 26
                            }}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,


                        </Text>
                    <View>
                        <Text style={{
                                padding: 14,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: Colors.WHITE,
                                opacity: 0.3,}}>
                            Suggested Photographers
                        </Text>

                        <FlatList
                            horizontal={true}
                            data={gallery}
                            renderItem={({item}) => {
                                return (
                                    <View style = {{paddingVertical: 20, paddingLeft: 16}}>
                                        <TouchableOpacity>
                                            <Image source={item.image}
                                                   style={{width: 150, marginRight: 8, height:150, borderRadius: 10}}/>
                                            <View style={styles.imageOverlay}/>
                                            <View style={styles.imageTextView}>
                                                <Feather name='map-pin' size={16} color='#000'
                                                         style={styles.imageLocationPin}/>
                                                <Text style={styles.imageText}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>)
                            }}/>
                    </View>

                    <Text
                        style={{
                            padding: 14,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: Colors.WHITE,
                            opacity: 0.3,}}>
                        Description
                    </Text>
                    <Text
                        style={{
                            color: Colors.WHITE,
                            opacity: 0.3,
                            paddingHorizontal: 14,
                            fontSize: 14,
                            fontWeight: 'normal',
                            justifyContent: 'flex-start',
                            textAlign: 'justify',
                            lineHeight: 26
                        }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word

                    </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default PhotographerFeedDash;
