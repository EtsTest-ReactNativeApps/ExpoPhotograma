import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../constants/Colors";
import Home from "./homeHeader/Home";
import DashboardFeed2 from "./components.photographerFeed/PhotographerFeedDash";


const DashboardStack = createStackNavigator();
export const DashboardStackScreen = ({ navigation }) => {
    navigation.setOptions({ cardStyle: {
            backgroundColor: "transparent"
        }
    });
    return(
        <DashboardStack.Navigator
            headerMode="none"
            barStyle={{ backgroundColor: Colors.BLUE_GREY }}
            initialRoute = "Home"
        >
            <DashboardStack.Screen name="Home" component={Home} />
            <DashboardStack.Screen name="PhotographerFeedDash" component={DashboardFeed2} />

        </DashboardStack.Navigator>
    )
};
