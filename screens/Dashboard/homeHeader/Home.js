import React from "react";

import {
    View, Button, StyleSheet, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, TextInput, Text, ActivityIndicator
} from "react-native";
import Colors from "../../../constants/Colors";
import { Feather } from '@expo/vector-icons/build/Icons';
import {styles} from './home.style';
import {useDispatch, useSelector} from "react-redux";
import {gallery} from "./gallery";
import {UserActions} from "../../../redux/user";
import {LikeActions} from "../../../redux/likes";

export default function Home({navigation}) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(UserActions.info());
    }, [dispatch]);

    React.useEffect(() => {
        dispatch(LikeActions.fetchLikes());
    }, [dispatch]);


    const [activity, setActivity] = React.useState(false);
    const myLikes = useSelector(state => state.like.data.data);
    const [weHaveLikes, setWeHaveLikes] = React.useState(false);


    setTimeout(()=>{
        console.log("GET MY LIKES" + myLikes);
        if (myLikes === undefined)
            setWeHaveLikes(false);
        else setWeHaveLikes(true);
        console.log("WE HAVE LIKES?" + weHaveLikes);
        setActivity(true);

    },4000);

    const renderHashtags = (myLikes) => {
        const item = myLikes[0];
        return (
            <TouchableOpacity style={{marginBottom: 30}} >
                <Image
                    source={{uri: item.attributes.avatar.url}}
                    style={styles.imageBig}/>
                <View style={styles.imageTextViewBig}>
                    <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column'}}>
                                <Feather name='camera' size={22} color='#000'
                                         style={styles.imageLocationPinBig}/>
                            </View>

                            <View style={{flexDirection: 'column', marginBottom: -8}}>
                                <Text style={{...styles.imageTextBig, fontWeight: 'bold'}}>{item.attributes.name}</Text>
                                <Text style={{...styles.imageTextBig, fontWeight: 'normal'}}>{item.attributes.photographer[0].city}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'};
    const recentImage = {uri : 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80}'};


    const goToSaved  = () => {
        navigation.navigate('SavedScreen')
    };

    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={ image }
                    style = {{width: '100%', height: 270}}
                    imageStyle = {{borderBottomRightRadius: 100 }}>
                    <View style={styles.darkOverlay}/>

                    <View style={styles.searchContainer}>
                        <Text style={styles.userGreet}>PHOTOGRAMA</Text>
                        <Text style={styles.userText}>Where do you plan to take the next shoot? 🌍 </Text>
                    </View>

                    <View>
                        <TextInput
                        style={styles.searchBox}
                        placeholder='Search photographers form destination list below 🗺️'
                        placeholderTextColor='#666'>

                        </TextInput>

                    </View>

                    <Feather name='menu' size={22} color='#fff'
                             style={{position: 'absolute', top: 40, left: 30}}/>
                    <Feather name='bell' size={22} color='#fff'
                             style={{position: 'absolute', top: 40, right: 30}}/>

                </ImageBackground>
            </View>

            <ScrollView>
                <View style = {{padding: 16}}>
                    <Text style = {{fontSize: 22, fontWeight: 'bold', color: Colors.LIGHT_GREY}}>Places📍</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({item}) => {
                            return (
                                <View style = {{paddingVertical: 20, paddingLeft: 16}}>
                                <TouchableOpacity onPress={() =>  {navigation.navigate('PhotographerFeedDash',
                                                            {
                                                                city: item.city,
                                                                cityDescription: item.cityDescription,
                                                                about: item.about,
                                                                attractions: item.attractions,
                                                                image: item.image,
                                                                latitude:item.latitude,
                                                                longitude: item.longitude,
                                                                flag: item.flag
                                                            })}}>
                                    <Image source={item.image}
                                           style={{width: 150, marginRight: 8, height:250, borderRadius: 10}}/>
                                    <View style={styles.imageOverlay}/>
                                    <View style={styles.imageTextView}>

                                        <Text style={styles.imageLocationPin}>{item.flag}</Text>
                                        <Text style={styles.imageText}>{item.city}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>)
                        }}/>
                </View>
                <View style={{marginBottom: 60}}>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: Colors.LIGHT_GREY}}>
                            Saved 📸
                        </Text>
                        <TouchableOpacity onPress={goToSaved}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: Colors.MY_RED}}>
                            View all
                        </Text>
                        </TouchableOpacity>
                    </View>


                    {activity === false ?
                        <ActivityIndicator color={Colors.MY_RED} style={{marginBottom: 20, marginTop: 20}}/>
                        :

                        <View>
                            {
                                weHaveLikes ? renderHashtags(myLikes)
                            :
                                  <View>
                                      <Image
                                          source={recentImage}
                                          style={styles.imageBig}/>
                                      <View style={styles.imageTextViewBig}>
                                          <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                                              <View style={{flexDirection: 'row'}}>
                                                  <View style={{flexDirection: 'column'}}>
                                                      <Feather name='camera' size={22} color='#000'
                                                               style={styles.imageLocationPinBig}/>
                                                  </View>

                                                  <View style={{flexDirection: 'column', marginBottom: -4}}>
                                                      <Text style={{...styles.imageTextBig, fontWeight: 'bold'}}>Photographer name</Text>
                                                      <Text style={{...styles.imageTextBig, fontWeight: 'normal'}}>Location</Text>
                                                  </View>

                                              </View>
                                          </View>
                                      </View>
                                  </View>
                            }
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    );
};

