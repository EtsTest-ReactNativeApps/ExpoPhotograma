import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          SignIn: 'signIn',
          SignUp: 'signUp',
          MyProfile: 'myProfile',
          Chat: 'chat',
          Favorites: 'favorites',
          Settings: 'settings',
        },
      },
      Auth: {
        path: 'auth',
        screens:{
          SignIn: 'signIn',
          SignUp: 'signUp'
        }
      }
    },
  });
}
