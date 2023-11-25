import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import DropDownPicker from 'react-native-dropdown-picker';

// "Set a time button": Brings up the picker style time thingy from the bottom
// Time picking: 0-9h, 0-60min
// Swipe back up, press the spark button at the bottom 
// Once pressed, show the coundown in the form MIN:SEC

// Switch back to picker style stuff? 
// Somehow keep the bottom "Spark" bar constant throughout different pages. Maybe import the component from Isa's app.js?

// Maybe add a pause button for the break? onPress={() => setIsPlaying(prev => !prev)}
// Fix dropdown size: Don't cover the countdown

function TimerPage() {



    return (
        <View styles={styles.container}>
            <View>
                <Image
                    source={require('./assets/img/timerLogs.png')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.select}>Select a task</Text>
            <Button title="Set a time" />
        </View>
    )
}

var styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: null,
        resizeMode: 'contain',
        height: 300,
        marginTop: 100
    },

    select: {
        textAlign: 'center',
        textDecorationLine: 'underline'
    }



})
export default TimerPage;