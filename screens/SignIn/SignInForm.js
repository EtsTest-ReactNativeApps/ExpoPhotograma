import * as React from 'react';
import Colors from "../../constants/Colors";
import {styles} from "../styles";

import {Formik} from "formik";
import { Fragment } from "react";
import { View } from "react-native";

import {validationSchema} from "../../validations/validation.signIn";

import {InputFormNormalText} from "../../components/InputFormNormalText";
import {ErrorMessage} from "../../components/ErrorMessages";
import {ButtonSignIn} from "../../components/ButtonSignIn";


import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../redux/user";
import { LinearGradient } from 'expo-linear-gradient';


// ----FOR REDUX-SAGA-----

const SignInForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    const error = useSelector(state => state.user.error);

    const onLogin = React.useCallback(
        values => {
            const { email, password } = values;
            dispatch(UserActions.login(email, password));
        },
        [dispatch],
    );

    return (
            <Formik initialValues={{email: '', password: ''}}
                    onSubmit={ onLogin }
                    validationSchema={validationSchema}>
                {({ handleChange, values, handleSubmit, errors, touched, handleBlur}) => (
                    <Fragment>

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

                        <View>
                            <LinearGradient
                                colors={[Colors.LIGHT_GREY,Colors.FIRST_RED, Colors.SECOND_RED]}
                                style={{ ...styles.buttonSignIn, marginTop: 10}}>
                            <ButtonSignIn text="SIGN IN"
                                          onPress={ handleSubmit }
                                          style={{fontSize: 20, fontWeight: 'bold', color: Colors.WHITE }}
                            />
                            </LinearGradient>
                        </View>
                    </Fragment>
                )}
            </Formik>
    )
};

export default SignInForm;
