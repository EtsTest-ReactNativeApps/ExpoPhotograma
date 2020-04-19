import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { SignUp } from "../screens/SignUp/SignUp";
import {ChatScreen} from "../screens/Chat/ChatScreen";
import {ProfileStackScreen} from "./ProfileNavigator";

const BottomTab = createMaterialBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'MyProfile';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route),
      headerStyle: {
          backgroundColor: Colors.BLUE_GREY} });

  const isLoggedIn = useSelector(state => state.user.loggedIn);
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
                         barStyle={{ backgroundColor: Colors.BLUE_GREY }}>
      <BottomTab.Screen
        name="Home"
        component={ LinksScreen }
        options={{
            tabBarLabel: 'FEED',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="AnimatedSignInScreen"
        component={ LinksScreen }
        options={{
            tabBarLabel: 'FAVORITES',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-star-outline" />,
        }}
        />
      <BottomTab.Screen
        name="Search"
        component={HomeScreen}
        options={{
            tabBarLabel: 'SEARCH',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
        }}
        />
        <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
            tabBarLabel: 'CHAT',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatbubbles" />,
        }}
        />

        <BottomTab.Screen
        name="MyProfile"
        component={ProfileStackScreen}
        options={{
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
        />
    </BottomTab.Navigator>
  );
}


function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'FEED';
    case 'Links':
      return 'Links to learn more';
    case 'MyProfile':
          return 'MY PROFILE';
    case 'SignIn':
          return 'SIGN IN';
    case 'SignUp':
          return 'SIGN UP';
  }
}
