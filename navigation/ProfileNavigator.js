import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../constants/Colors";
import * as React from "react";
import {MyProfileScreen} from "../screens/MyProfile/MyProfileScreen";
import {MyMapScreen} from "../screens/MyProfile/PhotographerFeed/components/MapView";
import {BookingCalendarScreen} from "../screens/MyProfile/PhotographerFeed/BookingCalendar";
import {EditScreen} from "../screens/MyProfile/UserFeed/components/EditScreen";
import {FutureAppointmentsScreen} from "../screens/MyProfile/UserFeed/components/FutureAppointmentsScreen";
import {EditUserScreen} from "../screens/MyProfile/UserFeed/components/EditUserScreen";
import {BecomePhotographerScreen} from "../screens/MyProfile/UserFeed/components/BecomePhotographerScreen";


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
            <ProfileStack.Screen name="EditScreen" component={EditScreen} />
            <ProfileStack.Screen name="EditUserScreen" component={EditUserScreen} />
            <ProfileStack.Screen name="BecomePhotographerScreen" component={BecomePhotographerScreen} />
            <ProfileStack.Screen name="FutureAppointmentsScreen" component={FutureAppointmentsScreen} />
        </ProfileStack.Navigator>
    )
};

