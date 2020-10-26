import React from 'react';
import {
  View,
  Text,
  Platform,
} from 'react-native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import io from 'socket.io-client';

import { Navigation } from './navigation'

export const socket = io('http://127.0.0.1:3000');

const App = () => {
  return (
    <View style={{ height: Platform.OS === 'web' ? '100vh' : '100%', overflow: 'hidden' }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Navigation />
      </ApplicationProvider>
    </View>
  );
};

export default App;
