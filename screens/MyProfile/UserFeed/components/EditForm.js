import * as React from 'react';
import Colors from "../../../../constants/Colors";

import {Formik} from "formik";
import { Fragment } from "react";
import {useDispatch, useSelector} from "react-redux";
import {InputFormNormalText} from "../../../../components/InputFormNormalText";
import {View, Button} from "react-native";
import {ButtonSignIn} from "../../../../components/ButtonSignIn";
import { PhotographerActions } from "../../../../redux/photographer";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "../../../styles";


// ----FOR REDUX-SAGA-----

const EditForm = ({navigation, avatar}) => {
    const dispatch = useDispatch();

    const onSignUp = React.useCallback(
        values => {
            const { description, secondDescription, cameraDescription} = values;
            dispatch(PhotographerActions.editPhotographer(description, secondDescription, cameraDescription));
        },
        [dispatch],

    );

    return (
        <Formik initialValues={{description: '', secondDescription: '', cameraDescription: ''}}
                onSubmit={ onSignUp }>
            {({ handleChange, values, handleSubmit, handleBlur}) => (
                <Fragment>

                    <InputFormNormalText name="description"
                                         value={values.description}
                                         onChangeText={handleChange('description')}
                                         onBlur={handleBlur('description')}/>

                    <InputFormNormalText name="secondDescription"
                                         value={values.secondDescription}
                                         onChangeText={handleChange('secondDescription')}
                                         onBlur={handleBlur('secondDescription')}/>

                    <InputFormNormalText name="cameraDescription"
                                         value={values.cameraDescription}
                                         onChangeText={handleChange('cameraDescription')}
                                         onBlur={handleBlur('cameraDescription')}/>

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

export default EditForm;
