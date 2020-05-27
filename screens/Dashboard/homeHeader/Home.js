import React from "react";

import {View, Button, StyleSheet, Image, ImageBackground,
    ScrollView, TouchableOpacity, FlatList, TextInput, Text} from "react-native";
import Colors from "../../../constants/Colors";
import { Feather } from '@expo/vector-icons/build/Icons';
import {styles} from './home.style';
import {useDispatch, useSelector} from "react-redux";
import {PhotographersActions} from "../../../redux/photographers";

export default function Home({navigation}) {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(PhotographersActions.photographersByCity("Cluj-Napoca"));
    }, [dispatch]);

    const photographer = useSelector(state => state.photographers.objects);
    {console.log(photographer)}


    const image = {uri : 'https://images.unsplash.com/photo-1590076082844-9cbfcef747d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}
    const recentImage = {uri : 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80}'};

    const [gallery, setgallery] =  React.useState([
        {
            title: 'Cluj-Napoca',
            key: '1',
            cityDescription: 'Cluj-Napoca, a city in northwestern Romania, is the unofficial capital of the Transylvania region. It\'s home to universities, vibrant nightlife and landmarks dating to Saxon and Hungarian rule. Surrounding its central square, Piața Unirii, is the Gothic-style St. Michael\'s Church and the dramatic Matthias Corvinus Statue of the 15th-century king. The baroque-era Bánffy Palace is now a museum showcasing Romanian art.',
            image:
                {uri : 'https://images.unsplash.com/photo-1513342791620-b106dc487c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}

        },{
            title: 'Paris',
            key: '2',
            cityDescription:'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
            image:
                {uri : 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}

        },
        {
            title: 'Viena',
            key: '3',
            cityDescription:'Vienna, Austria’s capital, lies in the country’s east on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart, Beethoven and Sigmund Freud. The city is also known for its Imperial palaces, including Schönbrunn, the Habsburgs’ summer residence. In the MuseumsQuartier district, historic and contemporary buildings display works by Egon Schiele, Gustav Klimt and other artists.',
            image:
                {uri : 'https://images.unsplash.com/photo-1578588520368-7076abeec469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'}

        },{
            title: 'Whashington DC',
            key: '4',
            cityDescription:'Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states of Maryland and Virginia. It’s defined by imposing neoclassical monuments and buildings – including the iconic ones that house the federal government’s 3 branches: the Capitol, White House and Supreme Court. It\'s also home to iconic museums and performing-arts venues such as the Kennedy Center.',
            image:
                {uri : 'https://images.unsplash.com/photo-1588526269304-3a1794c15cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=694&q=80'}

        },{
            title: 'New York',
            key: '5',
            cityDescription:'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
            image:
                {uri : 'https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}

        },{
            title: 'Chicago',
            key: '6',
            cityDescription:'Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.',
            image:
                {uri : 'https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}

        }]);


    const goToPhotographerFeed  = ({title}) => {
        navigation.navigate('PhotographerFeedDash', {city: title})
    };

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
                    <Text style = {{fontSize: 22, fontWeight: 'bold', color: Colors.LIGHT_GREY}}>Places</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({item}) => {
                            return (
                                <View style = {{paddingVertical: 20, paddingLeft: 16}}>
                                <TouchableOpacity onPress={() =>  navigation.navigate('PhotographerFeedDash', {city: item.title, cityDescription: item.cityDescription})}>
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
                        <TouchableOpacity onPress={goToSaved}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: Colors.MY_RED}}>
                            View all
                        </Text>
                        </TouchableOpacity>
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

