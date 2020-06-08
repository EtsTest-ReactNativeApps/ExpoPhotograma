import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native'
import * as tf from '@tensorflow/tfjs'

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

import Colors from "../../../constants/Colors";
import { bundleResourceIO} from '@tensorflow/tfjs-react-native'
import * as cvstfjs from '@microsoft/customvision-tfjs';

import * as FileSystem from 'expo-file-system'

const modelJson = require('/Users/nicoletaungur/ExpoPhotograma/assets/model/model.json');
const modelWeights = require('/Users/nicoletaungur/ExpoPhotograma/assets/model/weights.bin');

class TestApp extends React.Component {
    state = {
        isTfReady: false,
        isModelReady: false,
        predictions: null,
        image: null,
        getMyPredictions: null
    };

    async componentDidMount() {
        await tf.ready();
        this.setState({
            isTfReady: true
        });

        this.model = new cvstfjs.ClassificationModel();
        await this.model.loadModelAsync(bundleResourceIO(modelJson, modelWeights));

        this.setState({ isModelReady: true });
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!')
            }
        }
    };


     getPredictions = (imgBuffer) => {
        const url = `https://eastus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/95aef491-d60c-49e9-9089-994da68378be/classify/iterations/Iteration2/image`;
        return  fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Prediction-Key': '0b638c044a64458092852adcf4ac84ea'
            },
            body: imgBuffer
        })
            .then(res => res.json())
            .then(data => {
                return data.predictions;
            })
    };

    classifyImage = async () => {
        try {
            const imageAssetPath = Image.resolveAssetSource(this.state.image);
            console.log("imageAssetPath.uri ==> " + imageAssetPath.uri);
            const response = await FileSystem.readAsStringAsync(imageAssetPath.uri,
                { encoding: FileSystem.EncodingType.Base64 });
            const imgBuffer = tf.util.encodeString(response, 'base64');
            let predictions = await this.getPredictions(imgBuffer);
            predictions = predictions
            this.setState({ predictions: predictions });

            console.log("CEAU IMI PLACE SA LUCREZ AICIA\n" + this.state.predictions)

        } catch (error) {
            console.log(error)
        }
    };

    selectImage = async () => {
        try {
            let response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3]
            });

            if (!response.cancelled) {
                const source = { uri: response.uri };
                console.log(source);
                this.setState({ image: source });
                console.log(this.state.image);
                this.classifyImage()

            }
        } catch (error) {
            console.log(error)
        }
    };

    renderPrediction = prediction => {
        return (
            <Text key={prediction.className} style={styles.text}>
                {prediction}
            </Text>
        )
    };

    render() {
        const { isTfReady, isModelReady, predictions, image } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.loadingContainer}>
                    <Text style = {styles.text}>We are trying to give you the best prediction.</Text>
                    <Text style={styles.text}>
                        Wait for TensorFlow {isTfReady ? <Text>✔️</Text> : ''}
                    </Text>

                    <View style={styles.loadingModelContainer}>
                        <Text style={styles.text}>Model ready? </Text>
                        {isModelReady ? (
                            <Text style={styles.text}>🔥</Text>
                        ) : (
                            <ActivityIndicator size='small' />
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.imageWrapper}
                    onPress={isModelReady ? this.selectImage : undefined}>
                    {image && <Image source={image} style={styles.imageContainer} />}

                    {isModelReady && !image && (
                        <Text style={styles.transparentText}>Choose image 📸</Text>
                    )}
                </TouchableOpacity>
                <View style={styles.predictionWrapper}>
                    {isModelReady && image && (
                        <Text style={styles.text}>
                            Predictions: {predictions ? '' : 'Predicting...'}
                        </Text>
                    )}
                    {isModelReady &&
                    predictions &&
                    predictions.slice(0, 3).map(p => this.renderPrediction(p.tagName))}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
        alignItems: 'center'
    },
    loadingContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 80,
        justifyContent: 'center'
    },
    text: {
        color: Colors.LIGHT_GREY,
        fontSize: 18,
        alignSelf: 'center'
    },
    loadingModelContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },
    imageWrapper: {
        width: 300,
        height: 450,
        padding: 10,
        backgroundColor: Colors.BLUE_GREY,
        borderColor: Colors.LIGHT_GREY,
        borderWidth: 2,
        borderRadius: 15,
        shadowRadius: 15,
        shadowColor: Colors.MY_RED,
        shadowOpacity: 1,
        shadowOffset: { width: 0.5, height: 0.5 },
        marginTop: 40,
        marginBottom: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 280,
        height: 420,
        position: 'absolute',
        top: 10,
        left: 8,
        bottom: 8,
        right: 10,
        borderRadius: 15,

    },
    predictionWrapper: {
        height: 100,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    transparentText: {
        color: '#ffffff',
        opacity: 0.7
    },
    footer: {
        marginTop: 40
    },

});

export const TestAppModel = () => {
    return (<TestApp/>)
};
