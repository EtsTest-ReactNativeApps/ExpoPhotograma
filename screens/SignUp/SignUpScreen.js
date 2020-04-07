import * as React from 'react';
import { StatusBar, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { MonoText } from '../../components/StyledText';
import { Ionicons } from "@expo/vector-icons/build/Icons";
import { InputFormNormalText } from "../../components/InputFormNormalText";
import { ButtonSignIn }from "../../components/ButtonSignIn";

import { Formik } from "formik/dist/index";
import { Fragment } from "react";
import { styles }  from '../styles';


export default class SignUpScreen extends React.Component{
    handleSubmit = values => {
        if (values.email.length > 0 && values.password.length > 0) {
            setTimeout(() => {
                this.props.navigation.navigate('Home')
            }, 3000)
        }
    };

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer_SignUp}>

                <Formik initialValues={{email: '', password: '', username: '', name: '', phone: ''}}
                        onSubmit={values => {this.handleSubmit(values)}}>
                {
                    ({ handleChange, values, handleSubmit }) => (
                    <Fragment>
                        <StatusBar barStyle="light-content"/>
                            <Image
                                source={require("../../assets/images/filmWhite.png")}
                                style={{ position: "absolute", top: -170, right: -225 }}
                            />

                            <View style={{ position: "absolute", alignItems: "center", width: "100%" }}>
                                <TouchableOpacity style={styles.avatar_SignUp}>
                                    <Ionicons name="ios-add"
                                        size={40}
                                        color="#FFF"
                                        style={{marginTop: 6, marginLeft: 2}}/>
                                </TouchableOpacity>
                            </View>

                            <MonoText style={styles.greeting_SignUp}>{`Sign Up\nPhotograma`}</MonoText>

                            <View style={styles.form_SignUp}>
                                <InputFormNormalText name="email"
                                                     value={values.email}
                                                     onChangeText={handleChange('email')}/>

                                <InputFormNormalText name="password"
                                                     secureTextEntry
                                                     value={values.password}
                                                     onChangeText={handleChange('password')}/>

                                <InputFormNormalText name="name"
                                                     value={values.name}
                                                     onChangeText={handleChange('name')}/>

                                <InputFormNormalText name="username"
                                                     value={values.username}
                                                     onChangeText={handleChange('username')}/>

                                <InputFormNormalText name="phone"
                                                     value={values.phone}
                                                     onChangeText={handleChange('phone')}/>
                            </View>

                            <ButtonSignIn text="Sign Up"
                                          onPress={handleSubmit}/>

                        </Fragment>
                )
            }
            </Formik>
            <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("SignIn")}>
                <MonoText style={{ color: "#414959", fontSize: 13 }}>
                   Have an account?  <MonoText style={{ fontWeight: "500", color: "#323441" }}>Sign in</MonoText>
                </MonoText>
            </TouchableOpacity>


            </ScrollView>
        );
    }
}

