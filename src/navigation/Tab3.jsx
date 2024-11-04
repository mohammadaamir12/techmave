import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';

const Tab3 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ width: '90%', alignSelf: 'center', height: '100%' }}>
                <View style={{ marginTop: 20 }}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ position: 'absolute', left: 0, top: 0 }}>
                        <Icon name='arrowleft' size={25} color={'#000'} />
                    </TouchableOpacity> */}
                    <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>Profile</Text>
                </View>
                <Image source={require('../assets/profile.jpeg')} style={{ height: 100, width: 100, borderRadius: 50, resizeMode: 'cover', alignSelf: 'center', marginTop: 60 }} />
                <View>
                    <View style={styles.container}>
                        <Text style={styles.label}>Name</Text>
                        <View style={styles.shadowContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Alex Turner'
                                editable={false}
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.label}>Mobile</Text>
                        <View style={styles.shadowContainer}>
                            <TextInput
                                style={styles.input}
                                editable={false}
                                placeholder='+91 9454678956'
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.shadowContainer}>
                            <Icons style={{ position: 'absolute', bottom: 12, right: 12 }} name='eye-with-line' size={25} color='#262161' />
                            <TextInput
                                style={styles.input}
                                editable={false}
                                placeholder='********'
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '600',
    },
    shadowContainer: {
        borderRadius: 8,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        overflow: 'hidden',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
});

export default Tab3;
