import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

import axios from 'axios';

import SignUpScreen from "./screens/SignUpScreen";


import { Provider } from 'react-redux';
import {store} from "./config/store.config";
import {SignInScreen} from "./screens/SignInScreen";
import {AnimatedSignInScreen} from "./screens/SignIn/AnimatedSignIn";


//AXIOS HEADERS
axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

const Stack = createStackNavigator();


const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={ SignInScreen } />
        <AuthStack.Screen name="AnimatedSignInScreen" component={ AnimatedSignInScreen } />
      </AuthStack.Navigator>
  );
}


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
                <Stack.Screen name="SignUp" component={ SignUpScreen }  options={{ title: 'Sign up' }}/>
              </Stack.Navigator>
            </NavigationContainer>
        </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
