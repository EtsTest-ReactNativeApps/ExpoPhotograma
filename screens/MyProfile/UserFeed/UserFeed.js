import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "../PhotographerFeed/styles";
import HeaderUser from "./components/HeaderUser";
import AmenitiesUser from "./components/AmenitiesUser";
import AboutUser from "./components/AboutUser";
import BookmarkUser from "./components/BookmarkUser";
import ExtrasUser from "./components/ExtrasUser";
import {useDispatch, useSelector} from "react-redux";
import {PhotosActions} from "../../../redux/photos";



export default function UserFeed({navigation}) {
    const photographerInfo = useSelector(state => state.user.photographerInfo);
    {console.log(photographerInfo.length)}

    const avatar = useSelector(state => state.user.avatar);
    {console.log("AVATAR: " + avatar.url)}
    {if (photographerInfo.length === 0)

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <HeaderUser avatar={avatar} navigation={navigation}/>

                <View>
                    <AboutUser navigation={navigation}/>
                    <AmenitiesUser navigation={navigation}/>
                    <ExtrasUser navigation={navigation}/>
                </View>
            </View>);
        else
    {

        const dispatch = useDispatch();
        React.useEffect(() => {
            dispatch(PhotosActions.photosByPhotographer(photographerInfo.id));
        }, [dispatch]);

        return (<View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <HeaderUser avatar={avatar.url} navigation={navigation}/>

                <View>
                    <AboutUser navigation={navigation}/>
                    <BookmarkUser navigation={navigation}    />
                    <AmenitiesUser navigation={navigation}/>
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
