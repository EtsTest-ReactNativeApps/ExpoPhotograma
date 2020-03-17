import * as React from 'react';
import {
    StyleSheet,
    StatusBar,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    LayoutAnimation,
    ScrollView
} from 'react-native';
import { MonoText } from '../components/StyledText';
import InputFormNormalText from "../components/InputFormNormalText";
import InputFormSecureText from "../components/InputFormSecureText";
import ButtonSignIn from "../components/ButtonSignIn";

export default class SignInScreen extends React.Component{
    static navigationOptions = {
        header: null
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;
    };

    render() {
        return (
            <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Image
                    source={require("../assets/images/filmsNobackOne.png")}
                    style={{ position: "absolute", top: -160, right: -225 }}
                />
                <MonoText style={styles.greeting}>{` Hello again \nWelcome back`}</MonoText>

                <View style={styles.form}>
                    <InputFormNormalText name="Email"/>

                    <InputFormSecureText name="Password"/>
                </View>

                <ButtonSignIn text="Sign In" onPress={() => alert("Yes")}/>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("SignUp")}>
                    <MonoText style={{ color: "#414959", fontSize: 13 }}>
                        New to Photograma?  <MonoText style={{ fontWeight: "500", color: "#323441" }}>Sign up</MonoText>
                    </MonoText>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    greeting: {
        marginTop: 250,
        marginBottom:50,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    }
});
