import React from 'react'

import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@ui-kitten/components'

export const DialogList = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View>
                <Text>DialogList</Text>
                <Button onPress={() => navigation.push('Dialog')}>Dialog!</Button>
            </View>
        </SafeAreaView>
    )
}