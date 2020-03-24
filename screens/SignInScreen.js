import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MonoText } from '../components/StyledText';
import { InputFormNormalText } from "../components/InputFormNormalText";
import { InputFormSecureText } from "../components/InputFormSecureText";
import { ButtonSignIn } from "../components/ButtonSignIn";
import { styles }  from './styles'

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
            <View style={styles.container_SignIn} contentContainerStyle={styles.contentContainer_SignIn}>
                <Image
                    source={require("../assets/images/filmsNobackOne.png")}
                    style={{ position: "absolute", top: -160, right: -225 }}
                />
                <MonoText style={styles.greeting_SignIn}>{` Hello again \nWelcome back`}</MonoText>

                <View style={styles.form_SignIn}>
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
