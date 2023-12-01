import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import FinancialShopping from '../screens/FinancialShopping';
import Asset from '../screens/Asset';
import AccountBook from '../screens/AccountBook';
import Health from '../screens/Health';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerTitle: '', headerShadowVisible: false}}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="자산" component={Asset} />
      <Tab.Screen name="가계부" component={AccountBook} />
      <Tab.Screen name="건강" component={Health} />
      <Tab.Screen name="금융쇼핑" component={FinancialShopping} />
    </Tab.Navigator>
  );
}
