import { View, Text } from 'react-native'
import React from 'react'
import InputwithText from '../components/InputwithText'
import Button from '../components/Button'

const Login = ({ navigation }) => {
    const get = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <View style={{ width: '90%', flex: 1, alignSelf: 'center' }}>
                {/* Login text */}
                <View style={{ height: '20%', width: '70%', marginTop: '10%', }}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>Login</Text>
                    <Text style={{ fontSize: 20, fontWeight: '400', color: 'grey' }}>Please enter your mobile number and password</Text>
                </View>
                {/* Login input */}
                <View style={{}}>
                    <InputwithText text='Mobile' placeHolder='Enter Your Mobile' icon='mail' />
                    <InputwithText text='Password' placeHolder='Enter Your Password' icon='mobile1' />
                </View>

                <Button text='Login' textColor='#fff' backgroundFull='#262161' onTouch={get} />

            </View>
        </View>
    )
}

export default Login