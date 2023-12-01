import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigators/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
