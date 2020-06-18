import * as React from 'react';
import {View, ScrollView, Dimensions, Image, Alert} from 'react-native';
import {StyleSheet} from "react-native";

import Colors from "../../../../constants/Colors";
import Animated from "react-native-reanimated";
import {styles} from "../../../SignIn/styles";
import { TapGestureHandler} from "react-native-gesture-handler";
import {useSelector} from "react-redux";
import BecomePhotographerForm from "./BecomePhotographerForm";


const { height } = Dimensions.get('window');

const {} =  Animated;


export const BecomePhotographerScreen =({navigation})=> {
    const avatar = useSelector(state => state.user.avatar);
    console.log(avatar.url);

    return (
        <View style={myStyles.container}>
            <View
                style={{
                    ...StyleSheet.absoluteFill
                }}>

                <Image style={{
                    width: 420, marginRight: 8, height:400, borderRadius: 10
                }}
                       source={{uri: "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80"}}/>
            </View>

            <View style={{
                height: height / 2,
                backgroundColor: Colors.BLUE_GREY,
            }}>
                <TapGestureHandler onHandlerStateChange={() => navigation.navigate("MyProfileScreen")}>
                    <Animated.View style={styles.closeButton}>
                        <Animated.Text style={{fontSize: 15}}>
                            X
                        </Animated.Text>
                    </Animated.View>
                </TapGestureHandler>
                <ScrollView style={myStyles.form_SignUp}>
                    <BecomePhotographerForm navigation={navigation}/>
                </ScrollView>
            </View>
        </View>
    )
};



export const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLUE_GREY,
        justifyContent: 'flex-end',
    },
    form_SignUp:{
        marginBottom: 30,
        marginHorizontal: 30,
    }
});
