import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, Modal, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
import CountDownTimer from 'react-native-countdown-timer-hooks';


// Black out rest of the screen: On press touchbale opacity with black tint?
// Once pressed, show the coundown in the form MIN:SEC

// Somehow keep the bottom "Spark" bar constant throughout different pages. Maybe import the component from Isa's app.js?

// Somehow add a constant "h" symbol on the side of the pickers (?)

// Maybe add a pause button for the break? onPress={() => setIsPlaying(prev => !prev)}
// Switch fonts to use the proper ones
// Make an ACTUAL button for Set time, not an image

function TimerPage() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedHour, setSelectedHour] = React.useState(0);
    const [selectedMin, setSelectedMin] = React.useState(0);
    const [totalTime, setTotalTime] = React.useState(0);
    const [timerVisibility, setTimerVisibility] = React.useState('none');
    const [timerRunning, setTimerRunning] = React.useState(false);

    // Timer References
    const refTimer = React.useRef();

    // For keeping a track on the Timer
    const [timerEnd, setTimerEnd] = React.useState(false);

    const timerCallbackFunc = (timerFlag) => {
        // Setting timer flag to finished
        setTimerEnd(timerFlag);
        console.warn(
            'You can alert the user by letting him know that Timer is out.',
        );
    };

    // Create array from 0 to 59, for minute choices
    const numbers = [...Array(60).keys()]

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };


    async function onSpark() {
        setModalVisible(!modalVisible);
        const newTotalTime = (selectedMin * 60) + (selectedHour * 60 * 60);
        console.log('New Total Time:', newTotalTime);
        await sleep(1);
        setTotalTime(newTotalTime);
        setTimerRunning(true);
        setTimerVisibility('inline');
        refTimer.current.resetTimer();
    }

    return (
        <View styles={styles.container}>

            {/* Log image */}
            <View>
                <Image
                    source={require('./assets/img/timerLogs.png')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.select}>Select a task</Text>


            {/* Timer, only visible if spark was pressed */}
            <View style={{ display: timerVisibility }}>
                <Text style={styles.select}>{selectedHour} hours, {selectedMin} minutes, Total time: {totalTime}</Text>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CountDownTimer
                        ref={refTimer}
                        timestamp={totalTime}
                        timerCallback={timerCallbackFunc}
                        containerStyle={{
                            height: 56,
                            width: 120,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 35,
                            backgroundColor: '#2196f3',
                        }}
                        textStyle={{
                            fontSize: 25,
                            color: '#FFFFFF',
                            fontWeight: '500',
                            letterSpacing: 0.25,
                        }}
                    />
                </View>
            </View>


            {/* Button to activate modal */}
            <Button title="Set a time" onPress={() => setModalVisible(true)} style={styles.button} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        {/* Modal text/desc */}
                        <View style={styles.modalTitle}>
                            <Text style={styles.breakText}>Select your break time</Text>
                            <Text style={styles.descLine1}>go grab a snack, get a glass of water, take a nap!</Text>
                            <Text style={styles.descLine2}>make sure not to burnout!</Text>
                        </View>

                        {/* Row of time pickers */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.hourChoice}>
                                <Picker
                                    selectedValue={selectedHour}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedHour(itemValue)
                                    }>
                                    <Picker.Item label="0 h" value={0} />
                                    <Picker.Item label="1 h" value={1} />
                                    <Picker.Item label="2 h" value={2} />
                                    <Picker.Item label="3 h" value={3} />
                                    <Picker.Item label="4 h" value={4} />
                                    <Picker.Item label="5 h" value={5} />
                                    <Picker.Item label="6 h" value={6} />
                                    <Picker.Item label="7 h" value={7} />
                                    <Picker.Item label="8 h" value={8} />
                                    <Picker.Item label="9 h" value={9} />
                                    <Picker.Item label="10 h" value={10} />
                                    <Picker.Item label="11 h" value={11} />
                                    <Picker.Item label="12 h" value={12} />
                                </Picker>
                            </View>

                            <View style={styles.minChoice}>
                                <Picker
                                    selectedValue={selectedMin}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedMin(itemValue)
                                    }>


                                    {numbers.map((number) => (
                                        <Picker.Item label={"" + number + " min"} value={number} />
                                    ))}
                                </Picker>

                            </View>
                        </View>

                        {/* Spark button */}
                        <View style={styles.modalSpark}>
                            <Button
                                title="Spark"
                                onPress={() => onSpark()}>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
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

    hourChoice: {
        width: '10%',
        flex: 1
    },

    minChoice: {
        flex: 2
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        width: '100%',
        height: '60%',
        marginTop: 580,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },

    modalTitle: {
        flex: 1,
        width: '100%',
        marginRight: 0
    },

    breakText: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    descLine1: {
        marginTop: 5
    },

    descLine2: {
        marginTop: 3
    },

    modalSpark: {
        flex: 3
    }


})

export default TimerPage;