import React from 'react';
import { View, ImageBackground, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    const get = () => {
        navigation.navigate('Login')
    }
    return (
        <ImageBackground
            source={require('../assets/main.png')}
            style={styles.background}
        >
            <StatusBar hidden={true} />
            <View style={styles.overlay} />

            <View style={styles.centeredContainer}>
                <Text style={styles.welcomeText}>Welcome user</Text>
                <Text style={styles.descriptionText}>
                    Master cleanliness effortlessly with our management app. Keep a track of your bookings.
                </Text>
                <Button text='Get started' textColor='#000' backgroundFull='#fff' onTouch={get} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'center',
    },
    overlay: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    centeredContainer: {
        position: 'absolute',
        bottom: 40,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    welcomeText: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    descriptionText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Welcome;
