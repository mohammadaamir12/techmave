import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PunchInout from '../components/PunchInout';

const Tab1 = () => {
    return (
        <View style={{ backgroundColor: '#fff', height: '100%', width: '100%' }}>
            <View style={{ flex: 1, width: '90%', alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Welcome Back,</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Alex</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/profile.jpeg')} style={{ height: 50, width: 50, borderRadius: 50, resizeMode: 'cover' }} />
                    </View>
                </View>
                <LinearGradient
                    colors={['#262161', '#827EB8']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <View style={styles.gradientContent}>
                        <View style={styles.leftContainer}>
                            <Image source={require('../assets/maintxt.png')} style={styles.leftImage} />
                            <Text style={styles.leftText}>Cleanliness is the key to a healthy and happy life</Text>
                        </View>
                        <View style={styles.rightImageContainer}>
                            <Image source={require('../assets/women.png')} style={styles.rightImage} />
                        </View>
                    </View>
                </LinearGradient>
                <View>
                    <PunchInout text='Punch In' textIn='Punch in Time' time='09:00 a.m' timework='01.35 p.m' backgroundFull='#827EB8' />
                </View>
                <View style={{ marginTop: 15 }}>
                    <PunchInout text='Punch Out' textIn='Punch in Time' time='09:00 p.m' timework='06.35 p.m' backgroundFull='#bdbdbd' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 25,
    },
    gradientContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingStart: 15,
    },
    leftImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        tintColor: '#fff'
    },
    leftText: {
        color: '#fff',
        marginTop: 5,
        textAlign: 'left',
        width: 120
    },
    rightImageContainer: {
        position: 'relative',
        flex: 1,
        alignItems: 'flex-end',
    },
    rightImage: {
        position: 'absolute',
        top: -20,
        right: -90,
        height: '110%',
        resizeMode: 'contain',
    },
});

export default Tab1;
