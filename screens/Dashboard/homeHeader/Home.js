import React from "react";

import {View, Button, StyleSheet, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, TextInput, Text} from "react-native";
import Colors from "../../../constants/Colors";
import { Feather } from '@expo/vector-icons/build/Icons';
import {styles} from './home.style';
import {useDispatch, useSelector} from "react-redux";
import UserActions from "../../../redux/user";

export default function Home({navigation}) {
    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}
    const recentImage = {uri : 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80}'};

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


    const goToPhotographerFeed  = () => {
        navigation.navigate('PhotographerFeedDash')
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
                        <Text style={styles.userText}>Where do you plan to take the next shoot?</Text>
                    </View>

                    <View>
                        <TextInput
                        style={styles.searchBox}
                        placeholder='Search destination'
                        placeholderTextColor='#666'>

                        </TextInput>

                        <Feather name='search' size={22} color='#666'
                        style={{position: 'absolute', top: 25, right: 60, opacity: 0.6}}/>
                    </View>
                    <Feather name='menu' size={22} color='#fff'
                             style={{position: 'absolute', top: 40, left: 30}}/>
                    <Feather name='bell' size={22} color='#fff'
                             style={{position: 'absolute', top: 40, right: 30}}/>

                </ImageBackground>
            </View>

            <ScrollView>
                <View style = {{padding: 16}}>
                    <Text style = {{fontSize: 22, fontWeight: 'bold', color: Colors.LIGHT_GREY}}>Top preferences</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({item}) => {
                            return (
                                <View style = {{paddingVertical: 20, paddingLeft: 16}}>
                                <TouchableOpacity onPress={goToPhotographerFeed}>
                                    <Image source={item.image}
                                           style={{width: 150, marginRight: 8, height:250, borderRadius: 10}}/>
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
                <View style={{marginBottom: 60}}>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: Colors.LIGHT_GREY}}>
                            Saved
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: Colors.MY_RED}}>
                            View all
                        </Text>
                    </View>

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
            </ScrollView>
        </View>
    );
};
