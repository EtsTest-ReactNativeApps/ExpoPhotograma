import * as React from 'react';
import { StyleSheet, StatusBar, TextInput, View, TouchableOpacity, Image, LayoutAnimation} from 'react-native';
import { MonoText } from '../components/StyledText';

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
                <StatusBar barStyle="light-content"/>
                <Image
                    source={require("../assets/images/filmsNobackOne.png")}
                    style={{ position: "absolute", top: -160, right: -225 }}
                />
                <MonoText style={styles.greeting}>{` Hello again \nWelcome back`}</MonoText>

                <View style={styles.form}>
                    <View>
                        <MonoText style={styles.inputTitle}>Email Address</MonoText>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <MonoText style={styles.inputTitle}>Password</MonoText>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => alert("Yes")}>
                    <MonoText style={{ color: "#FFF", fontWeight: "500" }}>Sign in</MonoText>
                </TouchableOpacity>

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
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#323441",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});
