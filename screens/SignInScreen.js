import * as React from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { MonoText } from '../components/StyledText';
import { InputFormNormalText } from "../components/InputFormNormalText";
import { ButtonSignIn } from "../components/ButtonSignIn";
import { styles }  from './styles'
import { Formik } from "formik";
import { Fragment } from "react";
import { validationSchema } from "../validations/validation.signIn";
import { ErrorMessage } from "../components/ErrorMessages";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../redux/user";
import Colors from "../constants/Colors";

export const SignInScreen = ({navigation})  => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    const error = useSelector(state => state.user.error);

    const onLogin = React.useCallback(
        values => {
            const {email, password} = values;
            dispatch(UserActions.login(email, password));
        },
        [dispatch],
        navigation.navigate('Root', { screen: 'Home' })
    );

    return !isLoggedIn ? (
            <View style={styles.container} contentContainerStyle={styles.contentContainer_SignIn}>
                <Formik initialValues={{email: '', password: ''}}
                        onSubmit={ onLogin }
                        validationSchema={validationSchema}>
                    {({ handleChange, values, handleSubmit, errors, touched, handleBlur}) => (
                    <Fragment>
                        <Image
                            source={require("../assets/images/filmsNobackOne.png")}
                            style={{ position: "absolute", top: -150, right: -225 }}
                        />
                        <MonoText style={styles.greeting_SignIn}>{`\nWelcome back!`}</MonoText>

                        <View style={styles.form_SignIn}>
                            <InputFormNormalText name="email"
                                                 value={values.email}
                                                 onChangeText={handleChange('email')}
                                                 onBlur={handleBlur('email')}/>
                            <ErrorMessage errorValue={touched.email && errors.email} />
                            <InputFormNormalText name="password"
                                                 secureTextEntry
                                                 value={values.password}
                                                 onChangeText={handleChange('password')}
                                                 onBlur={handleBlur('password')}/>
                            <ErrorMessage errorValue={touched.password && errors.password} />
                        </View>

                        <ButtonSignIn text="Sign In"
                                      onPress={handleSubmit}
                                      style={styles.button}
                                      />
                    </Fragment>
               )
              }
            </Formik>
                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => navigation.navigate("SignUp")}>
                    <MonoText style={{ color: Colors.LIGHT_GREY, fontSize: 13 }}>
                        New to Photograma?  <MonoText style={{ fontWeight: "500", color: Colors.LIGHT_GREY }}>Sign up</MonoText>
                    </MonoText>
                </TouchableOpacity>
            </View>
    ) : <View>
        <MonoText>You are now logged in</MonoText>
    </View>
};
