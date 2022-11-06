/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import Functions from './Functions';
import FastImage from 'react-native-fast-image';
import HeaderComp from '../Components/HeaderComp';
import ActionSheet from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import MasterSheet from '../Components/MasterSheet';

const Masters = ({ navigation }) => {
  const width = Dimensions.get('screen').width;
  const actionSheetRef = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      actionSheetRef?.current.show();
    }, 500);
  }, []);

  return (
    <>
      <View className="px-5 h-[75px] bg-[#FFFFFF]">
        <HeaderComp
          name={'Master'}
          logo={true}
          nav={navigation}
          icons={true}
          action={actionSheetRef}
        />
      </View>
      <FastImage source={require('../Assets/Image/login_background.gif')} className="flex-1">
        <View className="h-[100%] justify-center items-center flex-row space-x-5">
          <Text className="text-[30px] text-black font-bold tracking-wider">Masters</Text>
          <TouchableOpacity onPress={() => actionSheetRef?.current.show()}>
            <Icon name={'menu-fold'} color={'black'} size={25} />
          </TouchableOpacity>
        </View>
      </FastImage>
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

export default Masters;
