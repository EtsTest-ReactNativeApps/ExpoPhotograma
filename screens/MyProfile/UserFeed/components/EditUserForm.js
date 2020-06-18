import * as React from 'react';
import Colors from "../../../../constants/Colors";

import {Formik} from "formik";
import { Fragment } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Alert, TextInput, View} from "react-native";
import {ButtonSignIn} from "../../../../components/ButtonSignIn";
import { UserActions } from "../../../../redux/user";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "../../../styles";
import {InputFormNormalText} from "../../../../components/InputFormNormalText";
import {HashtagActions} from "../../../../redux/hashtags";


// ----FOR REDUX-SAGA-----

const EditUserForm = ({navigation}) => {
    const dispatch = useDispatch();
    const myName = useSelector(state => state.user.name);
    const myPhone = useSelector(state => state.user.phone);
    console.log("MY NAME" + myName);
    const onSignUp = React.useCallback(
        values => {
            const {name, phone} = values;
            dispatch(UserActions.edit(name, phone));
            Alert.alert(
                "Info edited❤️",
                "Your info will be changed immediately " ,
                [

                    { text: "Thank you", onPress: () => {console.log("OK Pressed")} }
                ],
                { cancelable: false }
            );
            navigation.goBack();
        },
        [dispatch, navigation]

    );

    return (
        <Formik initialValues={{name: myName, phone: myPhone}}
                onSubmit={ onSignUp }>
            {({ handleChange, values, handleSubmit, handleBlur}) => (
                <Fragment>

                    <InputFormNormalText name="name"
                                         value={values.name}
                                         onChangeText={handleChange('name')}
                                         onBlur={handleBlur('name')}/>

                    <InputFormNormalText name="phone"
                                         value={values.phone}
                                         onChangeText={handleChange('phone')}
                                         onBlur={handleBlur('phone')}/>

                    <View>
                        <LinearGradient
                            colors={[Colors.LIGHT_GREY,Colors.FIRST_RED, Colors.SECOND_RED]}
                            style={{ ...styles.buttonSignIn, marginTop: 40}}>
                            <ButtonSignIn text="EDIT"
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

export default EditUserForm;
