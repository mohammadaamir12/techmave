import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={styles.customButton}
        onPress={onPress}
    >
        {children}
    </TouchableOpacity>
);

const BottomNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#262161', // Set active tab color
                tabBarInactiveTintColor: 'gray', // Set inactive tab color (optional)
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Tab1}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.iconContainer}>
                            <Icon name="home" size={size} color={color} />
                            <Text style={{ color }}>{'Home'}</Text>
                        </View>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Scan"
                component={Tab2}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                    tabBarIcon: () => (
                        <View style={styles.scanIconContainer}>
                            <Icons name="qrcode-scan" size={30} color="white" />
                        </View>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Tab3}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.iconContainer}>
                            <Icon name="person" size={size} color={color} />
                            <Text style={{ color }}>{'Profile'}</Text>
                        </View>
                    ),
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    customButton: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanIconContainer: {
        backgroundColor: '#262161',
        borderRadius: 40,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BottomNav;
