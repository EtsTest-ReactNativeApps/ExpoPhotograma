import * as React from 'react';
import {View, ScrollView, Dimensions, StatusBar, Image} from 'react-native';
import {StyleSheet} from "react-native";

import SignUpForm from "../SignUp/SignUpForm";
import Colors from "../../constants/Colors";
import Animated from "react-native-reanimated";
import {styles} from "../SignIn/styles";
import { TapGestureHandler, State } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('window');

const {
    Value,
    interpolate,
    Extrapolate,
     } =  Animated;


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
            return (
                <View style={myStyles.container}>
                    <View
                        style={{
                            ...StyleSheet.absoluteFill
                        }}>

                        <Image style={{
                                flex:1,
                                height: null,
                                width: null,
                                marginTop: -150
                            }}
                           source={require('../../assets/images/black_interesting3.png')}/>
                    </View>

                    <View style={{
                        height: height / 2.7,
                        backgroundColor: Colors.BLUE_GREY,
                    }}>
                        <TapGestureHandler onHandlerStateChange={() => this.props.navigation.navigate("SignIn")}>
                            <Animated.View style={styles.closeButton}>
                                <Animated.Text style={{fontSize: 15}}>
                                    X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>
                        <ScrollView style={myStyles.form_SignUp}>
                            <SignUpForm/>
                        </ScrollView>
                    </View>
                </View>
            )
        }
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
