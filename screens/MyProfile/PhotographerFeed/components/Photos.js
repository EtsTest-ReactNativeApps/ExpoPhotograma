import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { gs } from "../styles";
import {PhotosActions} from "../../../../redux/photos";
import {useDispatch, useSelector} from "react-redux";


export default function Photos({ navigation, photographer }) {

    const images = useSelector(state => state.photos.photosFromPhotographer);
    {console.log("IMAGES " + images)}
    return (
        <View style={[gs.sectionContainer, { marginTop: 8 }]}>
            <Text style={gs.sectionTitle}>Photos portofolio</Text>

            <View style={styles.photosContainer}>
                {console.log(images)}
                {images.map((photo, index) => {
                    {console.log("URL " + photo.url.thumb.url)}
                    return (
                        <Image
                            source={{ uri: photo.url.thumb.url }}
                            key={index}
                            style={[
                                styles.photo,
                                {
                                    marginRight: (index + 1) % 3 === 0 ? 0 : 12,
                                },
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
    },
    photo: {
        width: 105,
        height: 105,
        marginBottom: 12,
        borderRadius: 8,
    },
});
