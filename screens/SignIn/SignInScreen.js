import * as React from 'react';
import {Asset} from "expo-asset/build/index";
import AppLoading from "expo/build/launch/AppLoading";
import SignIn from "./SignIn";
import {useSelector} from "react-redux";
import {View} from "react-native";
import {MonoText} from "../../components/StyledText";

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
          isReady: false,

        };
    }

     _loadAssetsAsync = async () => {
        const imageAssets = cacheImages([require('../../assets/images/black_interesting.png')]);

        await Promise.all([...imageAssets]);
    };

    render() {

        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        return <SignIn navigation={this.props.navigation}/>
    };
}

export const AnimatedSignInScreen = ({ navigation }) => {
    return( <SignInScreen navigation={navigation} /> )
};
