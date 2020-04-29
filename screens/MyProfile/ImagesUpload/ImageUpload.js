import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useDispatch} from "react-redux";
import {UserActions} from "../../../redux/user";

export const ImgPicker = () =>{
    let [selectedImage, setSelectedImage] = React.useState(null);
    const dispatch = useDispatch();
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
        const { avatar } = { avatar: pickerResult.uri };
        dispatch(UserActions.update(avatar));
        alert("img up")
    };



    const onSubmit = React.useCallback(
        () => {
            const { avatar } = { avatar: selectedImage.localUri };
            dispatch(UserActions.update(avatar));
        },
        [dispatch],
        () => this.props.navigation.navigate("MyProfileScreen")
    );

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                <TouchableOpacity onPress={onSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Share this photo</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});


export const MyImagePicker = () => {
    return (<ImgPicker/>)
};
