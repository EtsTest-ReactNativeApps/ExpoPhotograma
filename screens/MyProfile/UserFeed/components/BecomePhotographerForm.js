import * as React from 'react';
import Colors from "../../../../constants/Colors";

import {default as formik, Formik} from "formik";
import { Fragment } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Alert, Picker, TextInput, View} from "react-native";
import {ButtonSignIn} from "../../../../components/ButtonSignIn";
import { PhotographerActions } from "../../../../redux/photographer";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "../../../styles";
import {InputFormNormalText} from "../../../../components/InputFormNormalText";
import {InputFormTextArea} from "../../../../components/InputFormTextArea";


// ----FOR REDUX-SAGA-----

const BecomePhotographerForm = ({navigation}) => {
    const dispatch = useDispatch();


    const onSignUp = React.useCallback(
        values => {
            const { description, secondDescription, cameraDescription, rating, price, city} = values;
            dispatch(PhotographerActions.createPhotographer(
                description,
                secondDescription,
                cameraDescription,
                rating,
                price,
                city));

            Alert.alert(
                "Welcome to the photographers' world 📷️",
                "Please log in again or reload the application to have everything set" ,
                [

                    { text: "Thank you ❤️", onPress: () => {console.log("OK Pressed")} }
                ],
                { cancelable: false }
            );
            navigation.goBack();
        },
        [dispatch, navigation]

    );

    return (
        <Formik initialValues={{description: '', secondDescription: '', cameraDescription: '', rating: '', price: '', city: ''}}
                onSubmit={ onSignUp }>
            {({ handleChange, values, handleSubmit, handleBlur}) => (
                <Fragment>


                    <InputFormTextArea name="description"
                                       value={values.description}
                                       onChangeText={handleChange('description')}
                                       onBlur={handleBlur('description')}/>

                    <InputFormTextArea name="secondDescription"
                                       value={values.secondDescription}
                                       onChangeText={handleChange('secondDescription')}
                                       onBlur={handleBlur('secondDescription')}/>

                    <InputFormTextArea name="cameraDescription"
                                       value={values.cameraDescription}
                                       onChangeText={handleChange('cameraDescription')}
                                       onBlur={handleBlur('cameraDescription')}/>

                    <InputFormNormalText name="rating"
                                         value={values.rating}
                                         onChangeText={handleChange('rating')}
                                         onBlur={handleBlur('rating')}/>

                    <InputFormNormalText name="price"
                                         value={values.price}
                                         onChangeText={handleChange('price')}
                                         onBlur={handleBlur('price')}/>

                    <InputFormNormalText name="city"
                                         value={values.city}
                                         onChangeText={handleChange('city')}
                                         onBlur={handleBlur('city')}/>

                    <View>
                        <LinearGradient
                            colors={[Colors.LIGHT_GREY,Colors.FIRST_RED, Colors.SECOND_RED]}
                            style={{ ...styles.buttonSignIn, marginTop: 40}}>
                            <ButtonSignIn text="Become photographer"
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

export default BecomePhotographerForm;
