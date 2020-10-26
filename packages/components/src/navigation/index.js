import './GestureHandler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dialog, DialogList } from '../screens';

const Stack = createStackNavigator();

const linking = {
  config: {
    screens: {
      DialogList: 'DialogList',
      Dialog: 'Dialog',
    },
  },
};

export function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator headerMode="none" screenOptions={{ animationEnabled: true }} >
        <Stack.Screen name="DialogList" component={DialogList} />
        <Stack.Screen name="Dialog" component={Dialog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
