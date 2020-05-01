import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {MonoText} from "../../components/StyledText";
import Colors from "../../constants/Colors";
import {useSelector} from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";


export default function MyPhotoAvatar() {
    const avatar = useSelector(state => state.user.avatar);
    const name = useSelector(state => state.user.data.name);
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
    };


    return (
            <View style={{ marginTop: 64, alignItems: "center" }}>
                <View style={styles.avatarContainer}>
                    {avatar != null ? <Image
                            source={{uri: avatar }}
                            style={styles.avatar}/>
                        :
                        <>
                            {selectedImage != null ?
                                <TouchableOpacity style={styles.avatarPlaceholder} onLongPress={openImagePickerAsync}>
                                    <Image source={{ uri: selectedImage.localUri }}
                                           style={styles.avatar2}/>
                                </TouchableOpacity>
                                : <TouchableOpacity style={styles.avatarPlaceholder} onLongPress={openImagePickerAsync}>
                                    <Image source={require('../../assets/images/avatar.png')}
                                           style={styles.avatar2}/>
                                    <Ionicons
                                        name="ios-add"
                                        size={40}
                                        color={Colors.BLACK}
                                        style={{marginTop: 100, marginLeft: 2}}/>
                                </TouchableOpacity>
                            }</>
                    }
                </View>
                <MonoText style={styles.name}>{name}</MonoText>
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 10,
        borderBottomColor: Colors.BLUE_GREY,
    },
    profile: {
        marginTop: 100,
        alignItems: "center"
    },
    avatarContainer: {
        shadowColor: Colors.BLUE_GREY,
        shadowRadius: 10,
        shadowOpacity: 0.4,
    },
    avatar: {
        marginTop: 40,
        width: 180,
        height: 180,
        borderRadius: 100,
    },
    avatarPlaceholder: {
        width: 180,
        height: 180,
        backgroundColor: "#E1E2E6",
        borderRadius: 100,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar2: {
        position: "absolute",
        marginTop: 40,
        width: 180,
        height: 180,
        borderRadius: 100,
        backgroundColor:Colors.LIGHT_GREY
    },
    name: {
        marginTop: 30,
        fontSize: 16,
        fontWeight: "600",
        color: Colors.WHITE,
        marginBottom: 30
    }
});
