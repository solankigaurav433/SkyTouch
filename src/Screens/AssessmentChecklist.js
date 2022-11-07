/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

import FastImage from 'react-native-fast-image';
import HeaderComp from '../Components/HeaderComp';
import EmptyComponent from '../Components/EmptyComponent';
// import ActionSheet from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/MaterialIcons';
// import Icon3 from 'react-native-vector-icons/FontAwesome5';
import MasterSheet from '../Components/MasterSheet';

const width = Dimensions.get('screen').width;

const data = [
  {
    id: 1,
    name: 'ABC ABC',
    description: 'ABC Description'
  },
  {
    id: 2,
    name: 'Test',
    description: 'Test Description'
  },
  {
    id: 3,
    name: 'Test 2',
    description: 'Test 2 Description'
  },
  {
    id: 4,
    name: 'Test 3',
    description: 'Test 3 Description'
  },
  {
    id: 5,
    name: 'Test 4',
    description: 'Test 4 Description'
  }
];

const renderItem = ({ item }) => {
  console.log('inside');
  return (
    <View
      className="bg-[#FFFFFF] rounded-[16px] px-3 py-3 my-2"
      style={{
        borderLeftColor: 'grey',
        borderLeftWidth: 2,
        borderRightColor: 'grey',
        borderRightWidth: 2,
        elevation: 4
      }}>
      <View className="flex-row justify-start pb-1">
        <Text className="font-bold text-black text-lg">Checklist Name</Text>
        <Text className="font-bold text-black text-lg flex-1 text-center ">Designation</Text>
      </View>
      <View className="flex-row justify-between py-1 items-center">
        <Text className="font-semibold text-black text-md">{item.name}</Text>
        <Text className="font-semibold text-black text-md w-[45%] text-justify ">
          {item.description}
        </Text>
      </View>
      <View className="border-[0.2px] border-gray-300 my-2" />
      <View className="flex-row justify-between">
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
  );
};

const AssessmentChecklist = ({ navigation }) => {
  const Header = () => (
    <View className=" flex-row justify-end space-x-2 mt-[2px] mx-[2px]">
      <TouchableOpacity
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
          name={'Assessment Checklist'}
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
      {/* </FastImage> */}
      {/* <ActionSheet
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25
        }}
        ref={actionSheetRef}>
        <View className=" items-center mx-[24px] ">
          <View className="h-[auto] ml-5 my-5 space-y-5" style={{ width: width }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AssessmentChecklist')}
              className="flex-row space-x-5 items-center">
              <Icon name={'check-circle'} size={25} color={'green'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Assessment Checklist
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-5 items-center">
              <Icon1 name={'users'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Employees
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-5 items-center">
              <Icon1 name={'suitcase'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Functions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-5 items-center">
              <Icon name={'settings'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Parts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-5 items-center">
              <Icon2 name={'place'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Place
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-7 items-center">
              <Icon1 name={'user'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Pilot
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-5 items-center">
              <Icon3 name={'store'} size={22} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Stores
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-5 items-center">
              <Icon3 name={'toolbox'} size={23} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Tool kits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-4 items-center">
              <Icon3 name={'store'} size={22} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Tool Store
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row space-x-5 items-center">
              <Icon3 name={'text-width'} size={23} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Width details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet> */}
      <MasterSheet nav={navigation} action={actionSheetRef} />
    </>
  );
};

export default AssessmentChecklist;
