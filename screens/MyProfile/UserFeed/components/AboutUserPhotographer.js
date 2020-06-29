import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { gs, colors } from "../styles";
import {useDispatch, useSelector} from "react-redux";
import Colors from "../../../../constants/Colors";
import {HashtagActions} from "../../../../redux/hashtags";


export default function AboutUserPhotographer({photographer, navigation} ) {
    const photographerInfo = useSelector(state => state.user.photographerInfo);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(HashtagActions.getHashtagsForMyProfile(photographerInfo.id));
    }, [dispatch]);

    const name = useSelector(state => state.user.data.name);
    const email = useSelector(state => state.user.data.email);
    const phone = useSelector(state => state.user.data.phone);
    const photographerAddress = useSelector(state => state.user.photographerAddress);
    const hashtags = useSelector(state => state.hashtag.myHashtags);

    let newArr = [];
    hashtags.map( item => newArr.push(item.attributes.name));
    let uniqueArray = Array.from(new Set(newArr));


    const renderHashtags = (item, key) => {
        return (
            <Text style={{
                marginLeft: 5,
                marginTop: 10,
                color: Colors.WHITE,
                padding: 5,
                marginRight: (key + 1) % 2 === 0 ? 0 : 10,
            }}>
                🔺️ {item}
            </Text>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={gs.title}>{name}</Text>
            <View style={gs.divider} />
            <Text style={gs.title3}>My info:</Text>
            <Text style={gs.sectionTitle}>Email:  {email}</Text>
            <Text style={gs.sectionTitle}>Phone number:  {phone}</Text>
            <Text style={gs.sectionTitle}>City:  {photographerAddress.city}</Text>
            <Text style={gs.sectionTitle}>Region:  {photographerAddress.region}</Text>
            <Text style={gs.sectionTitle}>Camera Description :  {photographer.cameraDescription}</Text>
            <Text style={gs.sectionTitle}>Price:  {photographer.price}$</Text>
            <Text style={{fontWeight: "700", color: Colors.MY_RED, fontSize: 18, marginTop: 10}}>
                My style:
            </Text>
            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
            {hashtags && uniqueArray.map(item => renderHashtags(item)) }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    }
});
