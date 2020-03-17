import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from "../screens/SignUpScreen";


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

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
        component={LinksScreen}
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


      <BottomTab.Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          title: 'Sign In',
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
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
    case 'MyProfile':
          return 'Edit my profile';
    case 'Sign In':
          return 'Sign In';
    case 'SignUp':
          return 'Sign Up';
  }
}
