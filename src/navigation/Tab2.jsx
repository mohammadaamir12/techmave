import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from '../screens/Scanner';
import Scanner1 from '../screens/Scanner1';
import Scanner2 from '../screens/Scanner2';
const Stack = createNativeStackNavigator();
const Tab2 = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="Scanner1" component={Scanner1} />
            <Stack.Screen name="Scanner2" component={Scanner2} />
        </Stack.Navigator>
    )
}

export default Tab2