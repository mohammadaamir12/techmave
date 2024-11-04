import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PunchInout = ({
    text, textIn, time, timework, backgroundFull
}) => {
    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.innerContainer}>
                <View style={[styles.punchInTimeContainer, { backgroundColor: backgroundFull }]}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>{textIn}</Text>
                    <Text style={{ fontSize: 34, color: '#fff', fontWeight: '600' }}>{time}</Text>
                </View>
                <View style={styles.totalHoursContainer}>
                    <Text style={{ fontSize: 14, color: '#000' }}>Total hours work</Text>
                    <Text style={{ fontSize: 14, color: '#000' }}>{timework}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 5,
        fontWeight: '600'
    },
    innerContainer: {
        alignItems: 'center',
        width: '100%',
    },
    punchInTimeContainer: {

        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 10

    },
    totalHoursContainer: {
        flexDirection: 'row',
        backgroundColor: '#dcdaf7',
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default PunchInout