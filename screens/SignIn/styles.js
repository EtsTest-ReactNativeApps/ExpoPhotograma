import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLUE_GREY,
        justifyContent: 'flex-end'
    },
    imgBack:{
        flex:1,
        height: null,
        width: null,
        marginTop: -160
    },
    buttonView: {
        height: height / 1.5,
        justifyContent: 'center'
    },
    button:{
        backgroundColor: Colors.BLUE_GREY,
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUp_btn:{
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton:{
        height: 40,
        width: 40,
        backgroundColor: Colors.LIGHT_GREY,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width / 2 - 20,
        shadowOffset: {width: 2, height: 2},
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.2
    },
    form_SignIn:{
        marginBottom: 30,
        marginHorizontal: 30
    }
});
