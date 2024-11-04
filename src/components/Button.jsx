import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ text, backgroundFull, textColor, onTouch }) => {
    return (
        <TouchableOpacity
            style={{
                width: '100%',
                paddingVertical: 15,
                backgroundColor: backgroundFull,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5
            }}
            onPress={onTouch}
        >
            <Text style={{ color: textColor, textAlign: 'center', fontSize: 16, fontWeight: '600' }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button