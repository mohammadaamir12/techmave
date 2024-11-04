import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Scanner2 = () => {
    const navigation = useNavigation();
    const get = () => {
        console.log('enter');

        navigation.navigate('Scanner')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={get} style={styles.backButton}>
                    <Icon name='arrowleft' size={25} color={'#000'} />
                </TouchableOpacity>
                <Text style={styles.title}>Scan QR</Text>
            </View>
            <View style={styles.content}>
                <Image source={require('../assets/qr.png')} style={styles.image} />
                <Text style={styles.message}>QR successfully scanned!</Text>
            </View>
            <View style={{ width: '90%', marginTop: 160 }}>
                <Button text='Punch out to start task' textColor='#fff' backgroundFull='#262161' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '90%',
        position: 'absolute',
        top: 20,
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    message: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
});

export default Scanner2