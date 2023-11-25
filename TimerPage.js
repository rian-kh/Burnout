import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import DropDownPicker from 'react-native-dropdown-picker';




// At the top, have "Enter custom time..." that lets you use a keypad to type in 

// Add conditionals when playing: If on, stop duration from changing. If off, allow it to change. If dropdown is open, don't allow button to be pressed.
// Maybe add a pause button for the break? onPress={() => setIsPlaying(prev => !prev)}
// Fix dropdown size: Don't cover the countdown

function TimerPage() {

    // Hooks
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [duration, setDuration] = React.useState(10);
    const [style, setStyle] = React.useState("LIGHT");
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [items, setItems] = React.useState([
        { label: '1 min', value: 1 },
        { label: '10 min', value: 10 },
        { label: '15 min', value: 15 },
        { label: '20 min', value: 20 },
        { label: '25 min', value: 25 },
        { label: '30 min', value: 30 },
    ]);

    // Used for button onPress
    function onPlay() {
        setIsPlaying(prev => !prev);
        if (style == "LIGHT")
            setStyle("DARK")
        else 
            setStyle("LIGHT")
    }

    // Used for dropdown open
    function onOpen() {
        if (open) {
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }
    }

    // Effect: Update duration when a dropdown choice is selected
    React.useEffect(() => {setDuration(value*60)}, [value])

    // Disable button if dropdown is open
    React.useEffect(onOpen, [open]);

    
    


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={duration}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => ({ shouldRepeat: true, delay: 2 })}
                updateInterval={1}
            >
                {({ remainingTime, color }) => (
                    <Text style={{ color, fontSize: 40 }}>
                        {Math.ceil(remainingTime/60)} min
                    </Text>
                )}
            </CountdownCircleTimer>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownDirection="TOP"
                disabled={isPlaying}
                theme={style}
            />

            <Button title="Toggle Playing" onPress={() => onPlay()} disabled={buttonDisabled} />

        </View>
    );
}



export default TimerPage;