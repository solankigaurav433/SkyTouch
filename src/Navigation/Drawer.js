/* eslint-disable react/react-in-jsx-scope */
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import Demo from '../Components/Demo';
import Dashboard from '../Screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Masters from '../Screens/Masters';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MasterScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Master">
      <Stack.Screen name="MasterPage" component={Masters} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen
        name="Master"
        options={{
          drawerLabel: 'Master',
          groupName: 'Master name',
          activeTintColor: '#e91e63'
        }}
        component={MasterScreenStack}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
