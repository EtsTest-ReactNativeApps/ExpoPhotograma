import * as React from 'react';
import {View, ScrollView, Dimensions, Image, Alert} from 'react-native';
import {StyleSheet} from "react-native";

import Colors from "../../../../constants/Colors";
import Animated from "react-native-reanimated";
import {styles} from "../../../SignIn/styles";
import { TapGestureHandler} from "react-native-gesture-handler";
import {useSelector} from "react-redux";
import EditUserForm from "./EditUserForm";


const { height } = Dimensions.get('window');

const {} =  Animated;


export const EditUserScreen =({navigation})=> {
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
                       source={require('../../../../assets/images/info.png')}/>
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
                    <EditUserForm navigation={navigation}/>
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
