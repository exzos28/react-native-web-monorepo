import React from 'react'

import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@ui-kitten/components'

export const Dialog = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Dialog</Text>
            <Button onPress={() => navigation.replace('DialogList')}>Go back!</Button>
        </View>
    )
}