import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import Tab1 from './src/navigation/Tab1';
import BottomNav from './src/navigation/BottomNav';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="Welcome" component={Welcome} />
         <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App