import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { gs } from "../styles";
import {PhotosActions} from "../../../../redux/photos";
import {useDispatch, useSelector} from "react-redux";


export default function Photos({ navigation }) {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(PhotosActions.photos());
    }, [dispatch]);
    const avatar = useSelector(state => state.user.avatar);
    const images = useSelector(state => state.photos.objects);
    const photographer = useSelector(state => state.user.photographerInfo);
    {console.log(photographer)}
    return (
        <View style={[gs.sectionContainer, { marginTop: 8 }]}>
            <Text style={gs.sectionTitle}>My Style</Text>

            <View style={styles.photosContainer}>
                {console.log(images)}
                {images.map((photo, index) => {
                    {console.log("URL " + photo.url.url)}
                    return (
                        <Image
                            source={{ uri: photo.url.url }}
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
