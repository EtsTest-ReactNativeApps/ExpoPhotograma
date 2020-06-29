import React from "react";
import {View, StyleSheet, StatusBar, ActivityIndicator} from "react-native";
import { colors } from "../PhotographerFeed/styles";
import HeaderUser from "./components/HeaderUser";
import AmenitiesUser from "./components/AmenitiesUser";
import AboutUser from "./components/AboutUser";
import BookmarkUser from "./components/BookmarkUser";
import ExtrasUser from "./components/ExtrasUser";
import {useSelector} from "react-redux";
import AmenitiesUserPhotographer from "./components/AmenitiesUserPhotographer";
import AboutUserPhotographer from "./components/AboutUserPhotographer";
import ExtrasPhotographer from "./components/ExtrasPhotographer";
import Colors from "../../../constants/Colors";


export default function UserFeed({navigation}) {
    const photographerInfo = useSelector(state => state.user.photographerInfo);
    const [activity, setActivity] = React.useState(false);

    setTimeout(()=>{
        setActivity(true);
    },1500);

    {if (photographerInfo.length === 0)
        //USER
        return (
            <View style={styles.container}>
                {activity === false?
                    <ActivityIndicator color={Colors.MY_RED} style={{marginBottom: 20, marginTop: 200}}/>
                    :
                <View>
                    <StatusBar barStyle="light-content" />
                    <HeaderUser navigation={navigation}/>

                    <View>
                        <AboutUser navigation={navigation}/>
                        <AmenitiesUser navigation={navigation}/>
                        <ExtrasUser navigation={navigation}/>
                    </View>
                </View>}
            </View>);
        else
    {

        //PHOTOGRAPHER
        return (
            <View style={styles.container}>
                {activity === false?
                    <ActivityIndicator color={Colors.MY_RED} style={{marginBottom: 20, marginTop: 200}}/>
                    :
                <View>
                    <StatusBar barStyle="light-content" />
                    <HeaderUser navigation={navigation}/>

                    <View>
                        <AboutUserPhotographer navigation={navigation} photographer={photographerInfo}/>
                        <BookmarkUser navigation={navigation} />
                        <AmenitiesUserPhotographer navigation={navigation} photographer={photographerInfo} />
                        <ExtrasPhotographer navigation={navigation} />
                    </View>
                </View>}
            </View>
        );}
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});
