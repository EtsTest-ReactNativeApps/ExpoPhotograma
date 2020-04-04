import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import { SignInScreen }  from '../screens/SignInScreen';
import {createStackNavigator} from "@react-navigation/stack";
import SignUpScreen from "../screens/SignUpScreen";
import {useSelector} from "react-redux";



const AuthStack = createStackNavigator();
function AuthStackScreen() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={ SignInScreen } />
            <AuthStack.Screen name="SignUp" component={ SignUpScreen } />
        </AuthStack.Navigator>
    );
}


const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  const isLoggedIn = useSelector(state => state.user.loggedIn);
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={LinksScreen}
        options={{
            title: 'Favorites',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-star-outline" />,
        }}
        />
      <BottomTab.Screen
        name="Search"
        component={HomeScreen}
        options={{
            title: 'Search',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
        }}
        />
        <BottomTab.Screen
        name="Chat"
        component={LinksScreen}
        options={{
            title: 'Chat',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatbubbles" />,
        }}
        />
        {!isLoggedIn ?
          <BottomTab.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign In',
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
            }}
          /> :
            <BottomTab.Screen
                name="MyProfile"
                component={LinksScreen}
                options={{
                    title: 'My Profile',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
                }}
            />}
    </BottomTab.Navigator>
  );
}


function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Links':
      return 'Links to learn more';
    case 'MyProfile':
          return 'Edit my profile';
    case 'SignIn':
          return 'Sign In';
    case 'SignUp':
          return 'Sign Up';
  }
}
