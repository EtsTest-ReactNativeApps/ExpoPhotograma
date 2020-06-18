import React, { useState } from 'react';
import {
    StyleSheet,
    Text, TouchableOpacity,
    View,
    Alert
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from "../../../constants/Colors";
import {colors} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {AppointmentActions} from "../../../redux/appointments";



export const BookingCalendarScreen = ({route, navigation}) =>{
    const user_id = useSelector(state => state.user.data.id);

    const { photographer } = route.params;
    const appointment_status  = "ACTIVE";

    const [selectedStartDate, setSelectedStartDate] = useState('');
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';



    const onDateChange = date  => {
        setSelectedStartDate(date);
        console.log(selectedStartDate.toString());

    };



    const dispatch = useDispatch();
    const onBooking = () => {

        Alert.alert(
            "Can't wait to meet you ❤️",
            "Your appointment is set for " + '\n' + new Date(selectedStartDate),
            [

                { text: "Thank you", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

        dispatch(AppointmentActions.createAppointment(photographer, user_id, new Date(selectedStartDate) , appointment_status));
            navigation.goBack();
        };



    return (
        <View style={styles.container}>
            <CalendarPicker
                onDateChange={onDateChange}
                selectedDayColor={Colors.MY_RED}/>

            <View style = {{marginTop: 100, marginLeft: 25}}>
                <Text>SELECTED DATE:  { startDate } </Text>
            </View>
            <View style={{ marginTop: 32, marginBottom: -40 }}>
                <TouchableOpacity style={{justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colors.pink,
                    borderRadius: 100,
                    paddingVertical: 16
                }}
                  onPress={onBooking}>
                    <Text style={{ fontWeight: "700", color: "#fff" }}>Book a photo shooting</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_GREY,
        paddingTop: 140,
    },
});



