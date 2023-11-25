import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimerPage from './TimerPage.js';

// Dropdown from 0 min to 30 min or something

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button
        title="Timer"
        onPress={() => navigation.navigate('Timer')}
      />

      <Button
        title="Journal"
        onPress={() => navigation.navigate('Journal')}
      />

      <Button
        title="Statistics"
        onPress={() => navigation.navigate('Statistics')}
      />
    </View>
  );
}

function journalScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Journal Screen</Text>
    </View>
  );
}

function statisticsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timer" component={TimerPage} />
        <Stack.Screen name="Journal" component={journalScreen} />
        <Stack.Screen name="Statistics" component={statisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
