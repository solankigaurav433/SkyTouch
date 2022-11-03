import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Demo from '../Components/Demo';
import MyDrawer from './Drawer';
import Initial from '../Screens/Initial';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="initial" component={Initial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="Dashboard" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
