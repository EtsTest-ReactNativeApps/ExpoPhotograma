import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "../PhotographerFeed/styles";
import HeaderUser from "./components/HeaderUser";
import AmenitiesUser from "./components/AmenitiesUser";
import AboutUser from "./components/AboutUser";
import BookmarkUser from "./components/BookmarkUser";
import ExtrasUser from "./components/ExtrasUser";
import {useDispatch, useSelector} from "react-redux";
import AmenitiesUserPhotographer from "./components/AmenitiesUserPhotographer";
import AboutUserPhotographer from "./components/AboutUserPhotographer";
import {HashtagActions} from "../../../redux/hashtags";
import {AppointmentActions} from "../../../redux/appointments";
import {UserActions} from "../../../redux/user";
import ExtrasPhotographer from "./components/ExtrasPhotographer";



export default function UserFeed({navigation}) {
    const photographerInfo = useSelector(state => state.user.photographerInfo);
    const avatar = useSelector(state => state.user.avatar);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(UserActions.info());
    }, [dispatch]);

    {if (photographerInfo.length === 0)
        //USER
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <HeaderUser avatar={avatar.url} navigation={navigation}/>

                <View>
                    <AboutUser navigation={navigation}/>
                    <AmenitiesUser navigation={navigation}/>
                    <ExtrasUser navigation={navigation}/>
                </View>
            </View>);
        else
    {


        //PHOTOGRAPHER
        const photographer_id = useSelector(state => state.user.photographerInfo.id);

        React.useEffect(() => {
            dispatch(HashtagActions.getHashtagsForPhotographer(photographer_id));
        }, [dispatch]);

        React.useEffect(() => {
            dispatch(AppointmentActions.getAppointmentsForCurrentUser(photographer_id));
        }, [dispatch]);



        return (<View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <HeaderUser avatar={avatar.url} navigation={navigation}/>

                <View>
                    <AboutUserPhotographer navigation={navigation} photographer={photographerInfo}/>
                    <BookmarkUser navigation={navigation} />
                    <AmenitiesUserPhotographer navigation={navigation} photographer={photographerInfo} />
                    <ExtrasPhotographer navigation={navigation} />
                </View>
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
