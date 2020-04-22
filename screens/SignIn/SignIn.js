import * as React from 'react';
import { View, Dimensions, Image, StyleSheet, ScrollView, TouchableWithoutFeedback } from "react-native";
import Colors from "../../constants/Colors";
import { MonoText } from "../../components/StyledText";

import Animated, { Easing } from 'react-native-reanimated'
import { TapGestureHandler, State } from "react-native-gesture-handler";
import {styles} from './styles'
import SignInForm from "./SignInForm";
import {LinearGradient} from "expo-linear-gradient";

const { width, height } = Dimensions.get('window');
const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate,
    concat } =  Animated;

function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
}

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.buttonOpacity =  new Value(1);
        this.registered= false;

        this.onStateChange = event([{

            nativeEvent:({ state }) => block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0)),
                )])
            }

        ]);

        this.onCloseState = event([{
            nativeEvent:({ state }) => block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 0, 1)),
            )])
        }
        ]);


        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
        });

        this.bgY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-height / 2.7, 0],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputZindex = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -1],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputZindex2 = interpolate(this.buttonOpacity, {
            inputRange: [1, 2],
            outputRange: [2, -2],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [0, 100],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputOpacity = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP
        });

        this.rotateCross = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [180, 360],
            extrapolate: Extrapolate.CLAMP
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFill,
                        transform: [{ translateY: this.bgY }]
                    }}
                >

                    <Image style={styles.imgBack}
                           source={require('../../assets/images/black_interesting1.png')}/>
                </Animated.View>

                <View style={styles.buttonView}>
                    <TapGestureHandler
                        onHandlerStateChange={this.onStateChange}>
                        <Animated.View
                            style={{
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}>
                            <View>
                                <LinearGradient
                                    style={{ ...styles.button}}
                                    colors={[Colors.LIGHT_GREY,Colors.FIRST_RED, Colors.SECOND_RED]}>
                                    <MonoText style={{fontSize: 20, fontWeight: 'bold', color: Colors.BLUE_GREY }}>SIGN IN</MonoText>
                                </LinearGradient>

                            </View>
                        </Animated.View>
                    </TapGestureHandler>

                    <Animated.View
                        style={{ ...styles.button,
                                backgroundColor: Colors.LIGHT_GREY,
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                        }}>
                        <MonoText style={{fontSize: 20, fontWeight: 'bold', color: Colors.WHITE}}>SIGN IN WITH FACEBOOK</MonoText>
                    </Animated.View>

                    <TouchableWithoutFeedback onPress={() => this.props.navigation.push("SignUpScreen") }>
                    <Animated.View
                        style={{ ...styles.signUp_btn,
                            opacity: this.buttonOpacity,
                            transform: [{ translateY: this.buttonY }]
                        }}>

                            <MonoText style={{fontSize: 14, fontWeight: 'bold', color: Colors.WHITE }}>New to photograma? Sign Up</MonoText>

                    </Animated.View>
                    </TouchableWithoutFeedback>


                    <Animated.View style={{
                    zIndex: this.textInputZindex,
                    opacity: this.textInputOpacity,
                    transform: [{translateY: this.textInputY}],
                    height: height / 2.7,
                    ...StyleSheet.absoluteFill,
                    top: null,
                    justifyContent: 'center'
                }}>

                    <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                        <Animated.View style={styles.closeButton}>
                            <Animated.Text style={{fontSize: 15, transform: [{rotate: concat(this.rotateCross, 'deg')}]}}>
                                X
                            </Animated.Text>
                        </Animated.View>
                    </TapGestureHandler>
                    <View style={styles.form_SignIn}>
                        <SignInForm/>
                    </View>
                </Animated.View>

                </View>
            </View>
        )
    };
}

