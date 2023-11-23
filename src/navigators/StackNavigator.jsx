import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export default function StackNavigator({navigation}) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  );
}
