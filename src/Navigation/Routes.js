import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Demo from '../Components/Demo';
import MyDrawer from './Drawer';
import Initial from '../Screens/Initial';
import AssessmentChecklist from '../Screens/AssessmentChecklist';
import AddNewCat from '../Components/AddNewCat';
import AddChecklist from '../Components/AddChecklist';
import Aircraft from '../Screens/Aircraft/Aircraft';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="initial" component={Initial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="Dashboard" component={MyDrawer} />
        <Stack.Screen name="AddNewCat" component={AddNewCat} />
        <Stack.Screen name="AddChecklist" component={AddChecklist} />
        <Stack.Screen name="Aircraft" component={Aircraft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
