import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {AnimatedSignInScreen} from "../screens/SignIn/SignInScreen";
import Colors from "../constants/Colors";
import {SignUpScreen} from "../screens/SignUp/SignUpScreen";


const INITIAL_ROUTE_NAME = 'SignIn';
const AuthStack = createStackNavigator();
export const AuthStackScreen = ({ navigation, route }) => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route),
        headerStyle: {
            backgroundColor: Colors.BLUE_GREY} });
    return(
        <AuthStack.Navigator headerMode="none"
            initialRouteName={INITIAL_ROUTE_NAME}
            barStyle={{ backgroundColor: Colors.BLUE_GREY }}>
            <AuthStack.Screen name="SignIn" component={AnimatedSignInScreen}/>
            <AuthStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        </AuthStack.Navigator>
    )
};


function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'SignIn':
            return 'SIGN IN';
        case 'SignUpScreen':
            return 'SIGN UP';
    }
}

