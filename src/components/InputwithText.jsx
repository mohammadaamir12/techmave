import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const InputwithText = ({ text, placeHolder, icon }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{text}</Text>
            <AntDesign style={{ position: 'absolute', bottom: 12, left: 12, }} name={icon} size={25} color='#262161' />
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeHolder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '600'

    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 50,
        color: '#000'
    },
    focusedInput: {
        borderColor: '#262161',
    },
});

export default InputwithText