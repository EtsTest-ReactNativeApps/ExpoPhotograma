import {StyleSheet, View} from "react-native";
import {colors} from "../MyProfile/PhotographerFeed/styles";
import React from "react";
import {Profiles} from "./index";
import { AppLoading } from "expo";
import {Asset} from "expo-asset";

import type {Profile} from "./Profile";

const profiles: Profile[] = [
    {
        id: "1",
        name: "First",
        age: 24,
        profile: require("../../assets/travel1.jpg"),
    },
    {
        id: "2",
        name: "Second",
        age: 30,
        profile: require("../../assets/travel2.jpg"),
    },
    {
        id: "3",
        name: "Third",
        age: 21,
        profile: require("../../assets/travel3.jpg"),
    },
    {
        id: "4",
        name: "OCTOCAT",
        age: 28,
        profile: require("../../assets/octocat.png"),
    },
    {
        id: "5",
        name: "",
        age: 28,
        profile: require("../../assets/END.png"),
    },


];

interface AppProps {

}

interface AppState {
    ready: boolean;
}

class MyApp extends React.Component<AppProps, AppState> {
    state = {
        ready: false,
    };

    async componentDidMount() {
        await Promise.all(profiles.map(profile => Asset.loadAsync(profile.profile)));
        this.setState({ ready: true });
    }

    render() {
        const { ready } = this.state;
        if (!ready) {
            return (
                <AppLoading />
            );
        }
        return (
            <Profiles {...{ profiles }} />
        );
    }
}

export default function FavoritesFeed1() {

    return (
        <View styles={styles.container}>
            <MyApp/>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});
