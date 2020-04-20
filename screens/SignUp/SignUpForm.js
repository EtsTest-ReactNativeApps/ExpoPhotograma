import * as React from 'react';
import Colors from "../../constants/Colors";
import {styles} from "../styles";

import {Formik} from "formik";
import { Fragment } from "react";
import {validationSchema} from "../../validations/validation.signUp";

import {InputFormNormalText} from "../../components/InputFormNormalText";
import {ErrorMessage} from "../../components/ErrorMessages";
import {ButtonSignIn} from "../../components/ButtonSignIn";

import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../redux/user";

import Animated from "react-native-reanimated";


// ----FOR REDUX-SAGA-----

const SignUpForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    const error = useSelector(state => state.user.error);

    const onSignUp = React.useCallback(
        values => {
            const { email, password, name, username, phone } = values;
            dispatch(UserActions.register(email, password, name, username, phone));
        },
        [dispatch],
        () => this.props.navigation.navigate("SignIn")
    );

    return (
        <Formik initialValues={{email: '', password: '', name: '', username: '', phone: ''}}
                onSubmit={ onSignUp }
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
                    <InputFormNormalText name="name"
                                         value={values.name}
                                         onChangeText={handleChange('name')}
                                         onBlur={handleBlur('name')}/>
                    <ErrorMessage errorValue={touched.password && errors.password} />
                    <InputFormNormalText name="username"
                                         value={values.username}
                                         onChangeText={handleChange('username')}
                                         onBlur={handleBlur('username')}/>
                    <ErrorMessage errorValue={touched.password && errors.password} />
                    <InputFormNormalText name="phone"
                                         value={values.phone}
                                         onChangeText={handleChange('phone')}
                                         onBlur={handleBlur('phone')}/>
                    <ErrorMessage errorValue={touched.password && errors.password} />

                    <Animated.View
                        style={{ ...styles.buttonSignIn, backgroundColor: Colors.LIGHT_GREY, marginTop: 10}}>
                        <ButtonSignIn text="SIGN UP"
                                      onPress={ handleSubmit }
                                      style={{fontSize: 20, fontWeight: 'bold', color: Colors.WHITE }}
                        />
                    </Animated.View>
                </Fragment>
            )}
        </Formik>
    )
};

export default SignUpForm;
