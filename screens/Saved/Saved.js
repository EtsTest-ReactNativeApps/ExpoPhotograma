import React from "react";

import {View, Button, StyleSheet, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, TextInput, Text} from "react-native";
import { Feather } from '@expo/vector-icons/build/Icons';
import {styles} from './saved.style';
import Colors from "../../constants/Colors";

const Saved = ({navigation}) => {
    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}
    // const image = {uri : 'https://images.unsplash.com/photo-1565423716358-75dd5468cd6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}
    const recentImage = {uri : 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80}'};

    const [gallery, setgallery] =  React.useState([
        {
            title: 'Cluj-Napoca',
            key: '1',
            cityDescription: 'Cluj-Napoca, a city in northwestern Romania, is the unofficial capital of the Transylvania region. It\'s home to universities, vibrant nightlife and landmarks dating to Saxon and Hungarian rule. Surrounding its central square, Piața Unirii, is the Gothic-style St. Michael\'s Church and the dramatic Matthias Corvinus Statue of the 15th-century king. The baroque-era Bánffy Palace is now a museum showcasing Romanian art.',
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
                    <TouchableOpacity onPress={() =>  navigation.navigate('Home')}>
                    <View style={styles.searchContainer}>
                        <Text style={styles.userGreet}>PHOTOGRAMA</Text>
                        <Text style={styles.userText}>Where do you plan to take the next shoot?</Text>
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

                <View style={{marginBottom: 60}}>
                    <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: Colors.LIGHT_GREY}}>
                            Saved
                        </Text>
                    </View>
                    <View>
                        <FlatList
                            data={gallery}
                            renderItem={({item}) => {
                                return (
                                    <View style = {{paddingRight: 16, paddingLeft: 16}}>
                                        <TouchableOpacity onPress={() =>  navigation.navigate('PhotographerFeedDash', {city: item.title})} style={{marginBottom: 30}}>
                                            <Image
                                                source={item.image}
                                                style={styles.imageBig}/>
                                            <View style={styles.imageTextViewBig}>
                                                <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <View style={{flexDirection: 'column'}}>
                                                            <Feather name='heart' size={22} color='#000'
                                                                     style={styles.imageLocationPinBig}/>
                                                        </View>

                                                        <View style={{flexDirection: 'column', marginBottom: -10}}>
                                                            <Text style={{...styles.imageTextBig, fontWeight: 'bold'}}>Photographer name</Text>
                                                            <Text style={{...styles.imageTextBig, fontWeight: 'normal'}}>Location</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>)
                            }}/>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};


export default Saved;
