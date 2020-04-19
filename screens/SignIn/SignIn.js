import * as React from 'react';
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Colors from "../../constants/Colors";
import { MonoText } from "../../components/StyledText";

import Animated, { Easing } from 'react-native-reanimated'
import { TapGestureHandler, State } from "react-native-gesture-handler";
import SignInForm from "./SignInForm";


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

        this.onStateChange = event([{
            nativeEvent:({ state }) => block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )])
            }
        ]);

        this.onCloseState = event([{
            nativeEvent:({ state }) => block([cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
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
            outputRange: [-height / 3, 0],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputZindex = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -1],
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
                            style={{ ...styles.button,
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}>
                                <MonoText style={{fontSize: 20, fontWeight: 'bold', color: Colors.WHITE }}>SIGN IN</MonoText>
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

                    <Animated.View style={{
                        zIndex: this.textInputZindex,
                        opacity: this.textInputOpacity,
                        transform: [{translateY: this.textInputY}],
                        height: height / 3,
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLUE_GREY,
        justifyContent: 'flex-end'
    },
    imgBack:{
        flex:1,
        height: null,
        width: null,
        marginTop: -160
    },
    buttonView: {
        height: height / 1.5,
        justifyContent: 'center'
    },
    button:{
        backgroundColor: Colors.BLUE_GREY,
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton:{
        height: 40,
        width: 40,
        backgroundColor: Colors.LIGHT_GREY,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width / 2 - 20,
        shadowOffset: {width: 2, height: 2},
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.2
    },
    form_SignIn:{
        marginBottom: 30,
        marginHorizontal: 30
    }
});
