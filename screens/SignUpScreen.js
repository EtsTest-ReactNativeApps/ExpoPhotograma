import * as React from 'react';
import { StyleSheet, StatusBar, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { MonoText } from '../components/StyledText';
import {Ionicons} from "@expo/vector-icons";

export default class SignUpScreen extends React.Component{
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
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <StatusBar barStyle="light-content"/>
                <Image
                    source={require("../assets/images/filmWhite.png")}
                    style={{ position: "absolute", top: -170, right: -225 }}
                />

                <View style={{ position: "absolute", alignItems: "center", width: "100%" }}>
                    <TouchableOpacity style={styles.avatar}>
                        <Ionicons name="ios-add"
                            size={40}
                            color="#FFF"
                            style={{marginTop: 6, marginLeft: 2}}/>
                    </TouchableOpacity>
                </View>

                <MonoText style={styles.greeting}>{`Register\nPhotograma`}</MonoText>

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

                    <View style={{ marginTop: 32 }}>
                        <MonoText style={styles.inputTitle}>Username</MonoText>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <MonoText style={styles.inputTitle}>Name</MonoText>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <MonoText style={styles.inputTitle}>Phone</MonoText>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => alert("Yes")}>
                    <MonoText style={{ color: "#FFF", fontWeight: "500" }}>Sign up</MonoText>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Login")}>
                    <MonoText style={{ color: "#414959", fontSize: 13 }}>
                       Have an account?  <MonoText style={{ fontWeight: "500", color: "#323441" }}>Sign in</MonoText>
                    </MonoText>
                </TouchableOpacity>
            </ScrollView>
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
        paddingBottom: 100,
    },
    greeting: {
        marginTop: 320,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        color: "#323441"
    },

    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    form: {
        marginTop: 50,
        marginHorizontal: 30
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
        marginTop: 50,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#323441",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    back: {
        position: "absolute",
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 220,
        justifyContent: "center",
        alignItems: "center"
    }
});
