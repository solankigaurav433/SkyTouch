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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AssessmentChecklist from '../Screens/AssessmentChecklist';
import Functions from '../Screens/Functions';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MasterScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Master">
      <Stack.Screen name="MasterPage" component={Masters} options={{ headerShown: false }} />
      <Stack.Screen
        name="AssessmentChecklist"
        component={AssessmentChecklist}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Functions" component={Functions} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export const CustomSidebar = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label={'Logout'} />
      {/* <TouchableOpacity className="items-center flex-row m-4 mt-2">
        <Text className="text-[#7E838C] ml-[40%] text-left">AssessmentChecklist</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center flex-row m-4 mt-2">
        <Text className="text-[#7E838C] ml-[40%] text-left">Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center flex-row m-4 mt-2">
        <Text className="text-[#7E838C] ml-[40%] text-left">Functions</Text>
      </TouchableOpacity> */}
    </DrawerContentScrollView>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#223648',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#7E838C'
      }}
      initialRouteName="Home"
      drawerContent={(props) => <CustomSidebar {...props} />}>
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen
        name="Master"
        options={{
          drawerLabel: 'Master',
          groupName: 'Master name',
          activeTintColor: '#e91e63'
          // drawerIcon: () => (
          //   <View className="w-[22px] items-center justify-center">
          //     <Icon name={'down'} size={20} />
          //   </View>
          // )
        }}
        component={MasterScreenStack}
      />
      <Drawer.Screen
        name="Request"
        options={{
          drawerLabel: 'Request',
          groupName: 'Request name',
          activeTintColor: '#e91e63'
          // drawerIcon: () => (
          //   <View className="w-[22px] items-center justify-center">
          //     <Icon name={'down'} size={20} />
          //   </View>
          // )
        }}
        component={MasterScreenStack}
      />
      <Drawer.Screen
        name="Assessment"
        options={{
          drawerLabel: 'Assessment',
          groupName: 'Request name',
          activeTintColor: '#e91e63'
          // drawerIcon: () => (
          //   <View className="w-[22px] items-center justify-center">
          //     <Icon name={'down'} size={20} />
          //   </View>
          // )
        }}
        component={AssessmentChecklist}
      />
      <Drawer.Screen
        name="Work Order"
        options={{
          drawerLabel: 'Work Order',
          groupName: 'Work order name',
          activeTintColor: '#e91e63'
          // drawerIcon: () => (
          //   <View className="w-[22px] items-center justify-center">
          //     <Icon name={'down'} size={20} />
          //   </View>
          // )
        }}
        component={MasterScreenStack}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
