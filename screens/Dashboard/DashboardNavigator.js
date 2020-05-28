import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Colors from "../../constants/Colors";
import Home from "./homeHeader/Home";
import DashboardFeed2 from "./components.photographerFeed/PhotographerFeedDash";
import {SavedScreen} from "../Saved/SavedScreen";
import {MyPhotographerFeedScreen} from "../MyProfile/MyPhotographerFeedScreen";
import {MyMapScreen} from "../MyProfile/PhotographerFeed/components/MapView";
import {PhotographerFeed} from "../MyProfile/PhotographerFeed/PhotographerFeed";


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
            <DashboardStack.Screen name="SavedScreen" component={SavedScreen} />
            <DashboardStack.Screen name="MyPhotographerFeedScreen" component={PhotographerFeed} />
            <DashboardStack.Screen name="MyMapScreen" component={MyMapScreen} />

        </DashboardStack.Navigator>
    )
};
