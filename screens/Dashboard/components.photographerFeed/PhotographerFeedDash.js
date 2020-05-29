import React, {useState} from "react";

import {View, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, Text, ActivityIndicator} from "react-native";
import {styles} from './photographerFeed.style';
import {Feather} from "@expo/vector-icons/build/Icons";
import Colors from "../../../constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import {PhotographersActions} from "../../../redux/photographers";
import ExtrasFeed from "./ExtrasFeed";


const PhotographerFeedDash = ({ route, navigation }) =>{
    const goToHome  = () => {
        navigation.goBack()
    };
    const { city } = route.params;
    const { attractions } = route.params;
    const { cityDescription } = route.params;
    const { about } = route.params;
    const { image } = route.params;
    const { latitude } = route.params;
    const { longitude } = route.params;

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(PhotographersActions.photographersByCity(city));
        }, [dispatch]);

    const photographer = useSelector(state => state.photographers.data);
    {console.log(photographer)}


    {console.log("CITY " + city)}
    return (
        <View style = {styles.container}>
            <View>
                <ImageBackground
                    source={ image }
                    style = {styles.image}>
                    <View style = {styles.imageTextView}>
                        <Text style = {styles.tagLine}> {city}</Text>
                        <Text style = {styles.placeName}> {about}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={goToHome}
                        style ={{
                            position:'absolute',
                            left: 20,
                            top: 50,
                            padding: 10,
                            borderRadius: 40}}
                        >
                        <Feather name='arrow-left' size={22} color={Colors.WHITE}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style ={{
                            position:'absolute',
                            right: 20,
                            top: 50,
                            padding: 10,
                            backgroundColor:Colors.LIGHT_GREY,
                            borderRadius: 40}}
                        onPress={() => navigation.navigate("MyMapScreen", {latitude: latitude, longitude: longitude})}>
                        <Feather name='map-pin' size={30} color={Colors.MY_RED}/>
                    </TouchableOpacity>
                </ImageBackground>

                <ScrollView style={{backgroundColor: Colors.DARK}}>
                    <View style={{paddingBottom: 400}}>

                    <Text
                        style={{
                            padding: 14,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: Colors.BEJ,
                            marginLeft: 4,
                            marginTop: 10
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
                            lineHeight: 26,
                            marginBottom: 20
                        }}>
                        {cityDescription}
                    </Text>

                    <ExtrasFeed attractions = {attractions} city={city} navigation={navigation}/>

                    <View>
                        <Text style={{
                                marginLeft: 15,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: Colors.WHITE,
                                marginBottom: 5
                                }}>
                            Suggested Photographers
                        </Text>

                        <View>
                            <FlatList
                                horizontal={true}
                                data={photographer}
                                renderItem={({item}) => {
                                    {console.log("ATTRIBUTES" + item)}
                                    return (
                                        <View style = {{paddingVertical: 20, paddingLeft: 16}}>
                                            <TouchableOpacity onPress={() => { navigation.navigate('MyPhotographerFeedScreen', {photographer : item})}}>


                                                <Image source={{uri: item.attributes.avatar.url}}
                                                       style={{width: 150, marginRight: 8, height:250, borderRadius: 10}}/>
                                                <View style={styles.imageOverlay}/>
                                                <View style={styles.imageTextView2}>
                                                    <Feather name='camera' size={16} color='#000'
                                                             style={styles.imageLocationPin}/>
                                                    <Text style={styles.imageText}>{item.attributes.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>)
                                }}/>
                        </View>
                    </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default PhotographerFeedDash;
