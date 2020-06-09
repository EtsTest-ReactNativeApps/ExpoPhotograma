import * as React from 'react';
import {View, ScrollView, Dimensions, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {StyleSheet} from "react-native";

import Colors from "../../../../constants/Colors";
import Animated from "react-native-reanimated";
import { TapGestureHandler} from "react-native-gesture-handler";
import {useSelector} from "react-redux";
import {gs} from "../styles";


const { width, height } = Dimensions.get('window');

const {} =  Animated;


export const FutureAppointmentsScreen =({navigation})=> {
    const avatar = useSelector(state => state.user.avatar);
    console.log(avatar.url);
    const myAppointments = useSelector(state => state.appointment.myAppointments);



    const renderHashtags = (item, key) => {
        return (
            <View >
                <Text style={{
                    marginLeft: 5,
                    marginTop: 5,
                    color: Colors.WHITE,
                    fontSize: 18
                }}>🔔  Name:   {item.attributes.name}
                </Text>
                <Text style={{
                    marginLeft: 10,
                    marginTop: 5,
                    color: Colors.WHITE,
                    fontSize: 18
                }}>📱 Phone:  {item.attributes.phone}
                </Text>
                <Text style={{
                    marginLeft: 10,
                    marginTop: 5,
                    color: Colors.WHITE,
                    fontSize: 18
                }}>⌚ Date:     {item.attributes.starting_time.substring(0,10)}
                </Text>
                <View style={gs.divider} />
            </View>
        );
    };
    return (
        <View style={myStyles.container}>
            <View
                style={{
                    ...StyleSheet.absoluteFill
                }}>

                <Image style={{
                    width: 420, marginRight: 8, height:400, borderRadius: 10
                }}
                       source={require('../../../../assets/images/appointments.png')}/>
            </View>

            <View style={{
                height: height / 2,
                backgroundColor: Colors.BLUE_GREY,
            }}>
                <TapGestureHandler onHandlerStateChange={() => navigation.navigate("MyProfileScreen")}>
                    <Animated.View style={{
                        height: 40,
                        width: 40,
                        backgroundColor: Colors.BEJ,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: -20,
                        left: width / 2 - 20,
                        shadowOffset: {width: 2, height: 2},
                        shadowColor: Colors.BLACK,
                        shadowOpacity: 0.2
                    }}>
                        <Animated.Text style={{fontSize: 15}}>
                            X
                        </Animated.Text>
                    </Animated.View>
                </TapGestureHandler>
                <ScrollView style={myStyles.form_SignUp}>
                    <View style={{
                        flexDirection: "column"
                    }}>
                        {myAppointments && myAppointments.map(item => renderHashtags(item)) }
                    </View>
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
        marginTop: 40
    }
});

