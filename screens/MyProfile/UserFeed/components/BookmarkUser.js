import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { gs, colors } from "../styles";
import {useDispatch} from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {Asset} from "expo-asset";
import {MyImageActions} from "../../../../redux/myImage";

export default function BookmarkUser() {
    const dispatch = useDispatch();
    let [selectedImage, setSelectedImage] = React.useState(null);

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
        console.log(avatar);
        dispatch(MyImageActions.myImage(avatar));
        Asset.loadAsync(avatar)
    };

    return (
        <TouchableOpacity style={styles.bookmark} onPress={openImagePickerAsync}>
            <Feather name="camera" size={24} color={colors.pink} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bookmark: {
        position: "absolute",
        width: 56,
        height: 56,
        right: 32,
        top: -56 / 2,
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius: 56 / 2,
        zIndex: 10
    }
});
