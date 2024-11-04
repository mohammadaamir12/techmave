import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Scanner = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name='scan-outline' color={'#262161'} size={300} />
                <LinearGradient
                    colors={['#fff', '#827EB8']}
                    style={styles.gradient}
                />
                <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: '600', color: '#000' }}>Scan QR to punch in</Text>
            </View>
            <View style={styles.iconContainer1}>
                <Text style={{ marginBottom: 10, color: '#000', fontSize: 16, fontWeight: '600' }} onPress={() => navigation.navigate('Scanner1')} >Press to Punch In</Text>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }} onPress={() => navigation.navigate('Scanner2')}>Press to Punch Out</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    iconContainer1: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    gradient: {
        width: '53%',
        height: '40%',
        position: 'absolute',
        bottom: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
});

export default Scanner;
