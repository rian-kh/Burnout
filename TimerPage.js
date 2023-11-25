import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions} from 'react-native';
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
// Switch fonts to use the proper ones
// Make an ACTUAL button for Set time, not an image


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

        <Button style={styles.button} title="Set a time"/>
      
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
        width: 196,
        height: 256,
        marginTop: 100,
        marginLeft: 96
    },

    select: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 23,
        color: "#6F5044"
    },

    button: {
        marginTop: 16
    },

    timerChoice: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }


})
export default TimerPage;