import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../constants/Colors";
import * as React from "react";
import {MyProfileScreen} from "../screens/MyProfile/MyProfileScreen";
import {MyMapScreen} from "../screens/MyProfile/PhotographerFeed/components/MapView";
import {BookingCalendarScreen} from "../screens/MyProfile/PhotographerFeed/BookingCalendar";
import {MyPhotographerFeedScreen} from "../screens/MyProfile/MyPhotographerFeedScreen";


const ProfileStack = createStackNavigator();
export const ProfileStackScreen = ({ navigation}) => {
    navigation.setOptions({ cardStyle: {
            backgroundColor: "transparent"
        }
    });
    return(
        <ProfileStack.Navigator headerMode="none"
                             barStyle={{ backgroundColor: Colors.BLUE_GREY }}>
            <ProfileStack.Screen name="MyProfileScreen" component={MyProfileScreen} />
            <ProfileStack.Screen name="MyMapScreen" component={MyMapScreen} />
            <ProfileStack.Screen name="BookingCalendarScreen" component={BookingCalendarScreen} />
        </ProfileStack.Navigator>
    )
};

