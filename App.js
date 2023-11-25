import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button
        title="Meditate"
        onPress={() => navigation.navigate('Meditate')}
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

function meditateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Meditate Screen</Text>
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
        <Stack.Screen name="Meditate" component={meditateScreen} />
        <Stack.Screen name="Journal" component={journalScreen} />
        <Stack.Screen name="Statistics" component={statisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
