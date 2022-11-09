/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import { View, Text, FlatList, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import HeaderComp from '../Components/HeaderComp';
import EmptyComponent from '../Components/EmptyComponent';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MasterSheet from '../Components/MasterSheet';

const Employees = ({ navigation }) => {
  const width = Dimensions.get('screen').width;

  const data = [
    {
      id: 1,
      code: 'QWE32R',
      name: 'Sushant Kalandre',
      base: 'Pune',
      department: 'Engineering - Rotary',
      status: 'active'
    },
    {
      id: 2,
      code: 'CDE32R',
      name: 'Mukesh Kumar',
      base: 'MUMBAI JUHU',
      department: 'CAMO',
      status: 'active'
    },
    {
      id: 3,
      code: 'QTY32R',
      name: 'Vaibhavi pacharne',
      base: 'MUMBAI JUHU',
      department: 'CAMO',
      status: 'active'
    },
    {
      id: 4,
      code: 'POK32R',
      name: 'Tahir Ahmad Mir',
      base: 'Bangalore',
      department: 'Engineering - Rotary CAMO',
      status: 'active'
    },
    {
      id: 5,
      code: 'POK32R',
      name: 'Machhindranath Wayangankar',
      base: 'MUMBAI JUHU',
      department: 'Finance and Accounts',
      status: 'active'
    }
  ];

  const renderItem = ({ item }) => {
    console.log('inside');
    return (
      //   <View
      //     className="bg-[#FFFFFF] rounded-[16px] px-3 py-3 my-2"
      //     style={{
      //       borderLeftColor: 'grey',
      //       borderLeftWidth: 2,
      //       borderRightColor: 'grey',
      //       borderRightWidth: 2,
      //       elevation: 4
      //     }}>
      //     <View className="flex-row justify-around items-start pb-1 space-x-2 my-1">
      //       <Entypo name={'user'} size={18} color={'black'} />
      //       <Text className="font-bold text-black w-[50%] text-[16px]">{item.name}</Text>
      //       <Text className="font-bold text-black  text-[16px] flex-1 text-right">
      //         {item.department}
      //       </Text>
      //     </View>
      //     <View className="bg-[#fafafa] flex-row  p-1 justify-between items-center space-x-5 rounded-[16px] my-1">
      //       <Text className="font-semibold text-black text-[12px]">Code: {item.code}</Text>
      //       <Text className="font-semibold text-black text-[12px] ">Base: {item.base}</Text>
      //       <View className="items-center">
      //         <Text className="font-semibold items-center text-black text-[12px]  ">
      //           Status: <Icon name={'check-circle'} size={12} color={'green'} />
      //         </Text>
      //       </View>
      //     </View>
      //     <View className="border-[0.2px] border-gray-300 my-2" />
      //     <View className="flex-row justify-between">
      //       <View>
      //         <View className="flex-row space-x-3">
      //           <TouchableOpacity className="items-center justify-center">
      //             <Icon name={'edit'} size={21} color={'black'} />
      //           </TouchableOpacity>
      //           <TouchableOpacity className=" items-center justify-center">
      //             <Icon1 name={'delete'} size={21} color={'black'} />
      //           </TouchableOpacity>
      //         </View>
      //       </View>
      //     </View>
      //   </View>
      <View
        className="bg-[#FFFFFF] rounded-[16px] px-3 py-3 my-2"
        style={{
          borderLeftColor: 'grey',
          borderLeftWidth: 2,
          borderRightColor: 'grey',
          borderRightWidth: 2,
          elevation: 1
        }}>
        <View className="flex-row  items-start pb-1 space-x-2 my-1">
          <Entypo name={'user'} size={18} color={'black'} />
          <Text className="font-bold text-black text-[16px]">{item.name}</Text>

          <View className="flex-1 items-end">
            <View>
              <View className="flex-row space-x-3">
                <TouchableOpacity className="items-center justify-center">
                  <Icon name={'edit'} size={21} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity className=" items-center justify-center">
                  <Icon1 name={'delete'} size={21} color={'black'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row justify-between space-x-1">
          <View className="bg-[#f2f2f2] px-1 py-[6px] rounded-[16px] my-1 w-[74%]">
            <Text className="font-bold text-black  text-[14px] flex-1 text-center">
              {item.department}
            </Text>
          </View>
          <View className="bg-[#f2f2f2] p-1 rounded-[16px] my-1 w-[24%] items-center justify-center">
            <Text className="font-semibold items-center text-black text-[12px]  ">
              Status: <Icon name={'check-circle'} size={12} color={'green'} />
            </Text>
          </View>
        </View>
        <View className="bg-[#f2f2f2] flex-row  px-2 py-[6px] justify-between items-center  rounded-[16px] my-1">
          <Text className="font-semibold text-black text-[13px]">Code: {item.code}</Text>
          <Text className="font-semibold text-black text-[13px] ">Base: {item.base}</Text>
        </View>
      </View>
    );
  };

  const Header = () => (
    <View className=" flex-row justify-end space-x-2 mt-[2px] mx-[2px]">
      <TouchableOpacity
        onPress={() => navigation.navigate('AddChecklist')}
        style={{ elevation: 4, borderColor: 'green', borderWidth: 1 }}
        className="bg-[#fafafa] space-x-1 items-center flex-row justify-center py-1 px-2 rounded-[16px]">
        <Icon1 name={'adduser'} size={21} color={'black'} />
        <Text className="text-black font-semibold">Add New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ elevation: 4, borderColor: 'red', borderWidth: 1 }}
        onPress={() => navigation.replace('MasterPage')}
        className="bg-[#fafafa] space-x-1 items-center flex-row justify-center py-1 px-2 rounded-[16px]">
        <Icon1 name={'closecircle'} size={20} color={'black'} />
        <Text className="text-black  font-semibol">Close</Text>
      </TouchableOpacity>
    </View>
  );
  const actionSheetRef = React.useRef(null);

  return (
    <>
      <View className="px-4 h-[auto] bg-[#FFFFFF]">
        <HeaderComp
          name={'Employees'}
          logo={true}
          nav={navigation}
          icons={true}
          action={actionSheetRef}
        />
      </View>
      {/* <FastImage source={require('../Assets/Image/fbg1.jpg')} resizeMode="cover"> */}
      <SafeAreaView className="mx-4 my-5 h-[100%]">
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem}
          ListHeaderComponent={Header}
          ListEmptyComponent={() => <EmptyComponent text="Nothing found" />}
          ListFooterComponent={() => <View className="h-[150]" />}
        />
      </SafeAreaView>

      <MasterSheet nav={navigation} action={actionSheetRef} />
    </>
  );
};

export default Employees;
