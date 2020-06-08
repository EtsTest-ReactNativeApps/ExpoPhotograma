import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../../../redux/user";
import Colors from "../../../../constants/Colors";


function AboutSecond ({photographer,  navigation }) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(UserActions.info());
    }, [dispatch]);

    const name = photographer.attributes.name;

    const hashtags = useSelector(state => state.hashtag.objectsHashtags);

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
                marginRight: (key + 1) % 2 === 0 ? 0 : 12,
            }}>
                🔺️ {item}
            </Text>
        );
    };

    return (
        <View style={styles.container}>

            <Text style={{fontWeight: "700", color: Colors.MY_RED, fontSize: 18, marginTop: 10}}>
                My style:
            </Text>
            <Text style={styles.about}>{photographer.attributes.secondDescription}</Text>
            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
            {hashtags && uniqueArray.map((key, item) => renderHashtags( key,item)) }
            </View>
        </View>
    );
}

export default AboutSecond;

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
        fontSize: 15,
        fontWeight: "600",
        color: Colors.WHITE,
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20
    }
});
