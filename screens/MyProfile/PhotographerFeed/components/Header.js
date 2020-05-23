import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {AntDesign, Entypo, Ionicons} from "@expo/vector-icons";
import { gs } from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {Asset} from "expo-asset";

import * as ImagePicker from "expo-image-picker";
import {UserActions} from "../../../../redux/user";
import Colors from "../../../../constants/Colors";


function Header ({ navigation }) {
    const avatar = useSelector(state => state.user.avatar);
    let [selectedImage, setSelectedImage] = React.useState(null);
    {console.log(avatar.url)}
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
        Asset.loadAsync(avatar)
    };


    const goToHome  = () => {
        navigation.navigate('Home')
    };

    return (
        <View>

            {avatar != null && !selectedImage?

                <TouchableOpacity onPress={openImagePickerAsync}>
                    <Image
                        source={{uri: avatar.url }}
                        style={{ width: "100%", height: 400 }} />
                </TouchableOpacity>
                :
                <>
                    { avatar != null && selectedImage != null ?
                        <TouchableOpacity style={styles.avatarPlaceholder} onPress={openImagePickerAsync}>
                            <Image source={{ uri: selectedImage.localUri }}
                                   style={{ width: "100%", height: 400 }} />
                        </TouchableOpacity>
                        : <TouchableOpacity style={styles.avatarPlaceholder} onPress={openImagePickerAsync}>
                            <Image source={require('../../../../assets/images/avatar.png')}
                                   style={{ width: "100%", height: 400 }} />
                            <Ionicons
                                name="ios-add"
                                size={40}
                                color={Colors.BLACK}
                                style={{marginTop: 100, marginLeft: 2}}/>
                        </TouchableOpacity>
                    }</>
            }
            {/*<Image source={require("../../../../assets/hotel.jpg")} style={{ width: "100%", height: 400 }} />*/}

            <View style={styles.topButtons}>
                <TouchableOpacity onPress={goToHome}>
                <AntDesign name="close" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={gs.rowCenter}>
                    <AntDesign name="picture" size={24} style={styles.topButtonRight} />
                    <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />
                    <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight} />
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    topButtons: {
        ...gs.rowBetween,
        position: "absolute",
        top: 64,
        left: 32,
        right: 32
    },
    topButtonRight: {
        marginLeft: 12,
        color: "#fff"
    }
});
