/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import { View, Text, FlatList, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import EmptyComponent from '../../Components/EmptyComponent';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderComp from '../../Components/HeaderComp';

const Aircraft = ({ navigation }) => {
  const width = Dimensions.get('screen').width;

  const data = [
    {
      id: 1,
      regno: 'VT-JSW',
      name: 'CESSNA AIRCRAFT Company',
      serialno: '208B-0798',
      hours: '5967:05',
      startdate: '10/11/2022',
      landings: '5554'
    },
    {
      id: 2,
      regno: 'VT-JSW',
      name: 'CESSNA AIRCRAFT Company',
      serialno: '208B-0798',
      hours: '5967:05',
      startdate: '10/11/2022',
      landings: '5554'
    },
    {
      id: 3,
      regno: 'VT-JSW',
      name: 'CESSNA AIRCRAFT Company',
      serialno: '208B-0798',
      hours: '5967:05',
      startdate: '10/11/2022',
      landings: '5554'
    },
    {
      id: 4,
      regno: 'VT-JSW',
      name: 'CESSNA AIRCRAFT Company',
      serialno: '208B-0798',
      hours: '5967:05',
      startdate: '10/11/2022',
      landings: '5554'
    },
    {
      id: 5,
      regno: 'VT-JSW',
      name: 'CESSNA AIRCRAFT Company',
      serialno: '208B-0798',
      hours: '5967:05',
      startdate: '10/11/2022',
      landings: '5554'
    }
  ];

  const renderItem = ({ item }) => {
    console.log('inside');
    return (
      <View
        className="bg-[#FFFFFF] rounded-[16px] px-3 py-3 my-2"
        style={{
          borderColor: 'grey',
          borderWidth: 0.5,

          elevation: 1
        }}>
        <View className="flex-row  items-start pb-1 space-x-2 my-1">
          <Entypo name={'aircraft'} size={18} color={'black'} />
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
          <View className="bg-[#f2f2f2] items-center justify-center px-1 py-[6px] rounded-[16px] my-1 w-[50%]">
            <Text className="font-bold text-black  text-[14px] flex-1">Reg : {item.regno}</Text>
          </View>
          <View className="bg-[#f2f2f2] p-1 rounded-[16px] my-1 w-[50%] items-center justify-center">
            <Text className="font-semibold items-center text-black text-[14px]  ">
              Serial : {item.serialno}
            </Text>
          </View>
        </View>
        <View className="bg-[#f2f2f2] flex-row  px-2 py-[6px] justify-between items-center  rounded-[16px] my-1">
          <Text className="font-semibold text-black text-[13px]">{item.startdate}</Text>
          <Text className="font-semibold text-black text-[13px] ">{item.hours}</Text>
          <Text className="font-semibold text-black text-[13px] ">{item.landings}</Text>
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
        <HeaderComp name={'Aircrafts'} logo={true} nav={navigation} action={actionSheetRef} />
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
    </>
  );
};

export default Aircraft;
