import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome')
        }, 2000);
    }, [])
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/149c/3aaa/528e1dc14f1023d3b1fb79fdc8ad6979?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ell~fmgYC9k2jx~atzLX9GC5TbnRU0vpNdwZLCNQUN~w3G7RxWYNeAo0tPgKRTjU47gyQQUr7S36g25dtKeD~AoJ672Oa~n5aVEFloNZ70Gc0bySd6xB0yPsI4vHXoeD~RZqqUq95HFoOte56TGYEHp0IJaWKscgEOi0KxS-ASDTq1BaW8o-sFVGn5SgKbc1iHUV84Dr0izjxTRvKLOHQmlDY05kYYdJPdk4EsPlnYC7arOxftQiK2VHCVfvc2pZSC6bP7aG9yySrMyqbT3LgLxUBCaFCG~HJ5NFnR1C6iQu1uNiJxNv4EVtM8lTFMpSkpmnPGYIjxh-z-KeWqtiYQ__' }}
                style={{ width: 239, height: 239 }}
            />
            <Text style={{ color: '#000', fontSize: 14, position: 'absolute', bottom: 10 }}>Powered by Regions</Text>
        </View>
    )
}

export default Splash