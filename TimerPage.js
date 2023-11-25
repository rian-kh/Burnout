import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'



function TimerPage() {

    const [isPlaying, setIsPlaying] = React.useState(true)
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={10}
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
            <Text>Beans milo cat</Text>

            <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} />

        </View>
    );
}


export default TimerPage;