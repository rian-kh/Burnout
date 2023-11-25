import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, Modal, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import DropDownPicker from 'react-native-dropdown-picker';


// "Set a time button": Brings up the picker style time thingy from the bottom
// Time picking: 0-9h, 0-60min
// Swipe back up, press the spark button at the bottom 
// Black out rest of the screen: On press touchbale opacity with black tint?
// Once pressed, show the coundown in the form MIN:SEC

// Switch back to picker style stuff? 
// Somehow keep the bottom "Spark" bar constant throughout different pages. Maybe import the component from Isa's app.js?


// Maybe add a pause button for the break? onPress={() => setIsPlaying(prev => !prev)}
// Switch fonts to use the proper ones
// Make an ACTUAL button for Set time, not an image


function TimerPage() {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View styles={styles.container}>
            <View>
                <Image
                    source={require('./assets/img/timerLogs.png')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.select}>Select a task</Text>

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
                        <View style={styles.modalTitle}>
                            <Text style={styles.breakText}>Select your break time</Text>
                            <Text style={styles.descLine1}>go grab a snack, get a glass of water, take a nap!</Text>
                            <Text style={styles.descLine2}>make sure not to burnout!</Text>
                        </View>

                        <View style={styles.modalSpark}>
                            <Button
                                title="Spark"
                                onPress={() => setModalVisible(!modalVisible)}>
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

    timerChoice: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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