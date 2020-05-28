import React, { useState } from 'react';
import {
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from "../../../constants/Colors";
import {colors} from "./styles";

function BookingCalendar ({navigation}){

    const [selectedStartDate, setSelectedStartDate] = useState('');

    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (
            <View style={styles.container}>
                <CalendarPicker
                    onDateChange={setSelectedStartDate}
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
                      onPress={() => {
                          // Pass params back to home screen
                          navigation.navigate('MyProfileScreen', { startDate: startDate });
                      }}>
                        <Text style={{ fontWeight: "700", color: "#fff" }}>Book a photo shooting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_GREY,
        paddingTop: 140,
    },
});


export const BookingCalendarScreen = ({ navigation }) => {
    return <BookingCalendar navigation={navigation}/>
};


