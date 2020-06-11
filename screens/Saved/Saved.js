import React from "react";

import {
    View, Button, StyleSheet, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, TextInput, Text, ActivityIndicator
} from "react-native";
import { Feather } from '@expo/vector-icons/build/Icons';
import {styles} from './saved.style';
import Colors from "../../constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import {SavedActions} from "../../redux/saved";

const Saved = ({navigation}) => {
    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}


    const likes = useSelector(state => state.saved.objectsSaved);
    {console.log("From Saved screen" + likes)}

    let newArr = [];
    likes.map( item => newArr.push(item));
    let uniqueArray = Array.from(new Set(newArr));

    const [activity, setActivity] = React.useState(false);
    setTimeout(()=>{
        setActivity(true);
    },2000);

    const renderHashtags = (item, key) => {
        return (
            <TouchableOpacity style={{marginBottom: 30}}>
                <Image
                    source={{uri: item.attributes.avatar.url}}
                    style={styles.imageBig}/>
                    <View style={styles.imageTextViewBig}>
                        <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'column'}}>
                                    <Feather name='heart' size={22} color='#000'
                                             style={styles.imageLocationPinBig}/>
                                </View>

                                <View style={{flexDirection: 'column', marginBottom: -10}}>
                                    <Text style={{...styles.imageTextBig, fontWeight: 'bold'}}>{item.attributes.name}</Text>
                                    <Text style={{...styles.imageTextBig, fontWeight: 'normal'}}>{item.attributes.photographer[0].city}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
        </TouchableOpacity>
        );
    };


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
                    <TouchableOpacity onPress={() =>  navigation.navigate('Home')}>
                    <View style={styles.searchContainer}>
                        <Text style={styles.userGreet}>PHOTOGRAMA</Text>
                        <Text style={styles.userText}>Where do you plan to take the next shoot? 🌍</Text>
                    </View>
                    </TouchableOpacity>
                    <View>
                        <TextInput
                            style={{...styles.searchBox}}
                            placeholder='Search saved destination'
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

                <View style={{marginBottom: 10}}>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: Colors.LIGHT_GREY}}>
                            Saved 📸
                        </Text>
                </View>
                </View>

                {activity === false ?
                    <ActivityIndicator color={Colors.MY_RED} style={{marginBottom: 20, marginTop: 20}}/>
                    :
                    <View style={{paddingRight: 16, paddingLeft: 16}}>
                        {likes && uniqueArray.map(item => renderHashtags(item))}
                    </View>
                }
            </ScrollView>
        </View>
    );
};


export default Saved;
