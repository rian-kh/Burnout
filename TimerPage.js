import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import DropDownPicker from 'react-native-dropdown-picker';



// NOTE: Visual bug on 15 min and 25 min
// Dropdown: Maybe like 1min to 30min
// At the top, have "Enter custom time..." that lets you use a keypad to type in 

// Maybe add a pause button for the break?
// Fix dropdown size: Don't cover the countdown

function TimerPage() {

    const [isPlaying, setIsPlaying] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [duration, setDuration] = React.useState(10);
    const [items, setItems] = React.useState([
        { label: '5 min', value: 5 },
        { label: '10 min', value: 10 },
        { label: '15 min', value: 15 },
        { label: '20 min', value: 20 },
        { label: '25 min', value: 25 },
        { label: '30 min', value: 30 },
    ]);

    React.useEffect(() => {setDuration(value)}, [value])


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
                        {remainingTime}
                    </Text>
                )}
            </CountdownCircleTimer>
            <Text>Beans milo cat ${value}</Text>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownDirection="TOP"
            />

            <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} />

        </View>
    );
}

function updateTime() {

}

export default TimerPage;