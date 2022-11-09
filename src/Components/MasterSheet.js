/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('screen').width;

const MasterSheet = ({ action, nav }) => {
  return (
    <View>
      <ActionSheet
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25
        }}
        ref={action}>
        <View className=" items-center mx-[24px] ">
          <View className="h-[auto] ml-5 my-5 space-y-5" style={{ width: width }}>
            <TouchableOpacity
              onPress={() => nav.navigate('AssessmentChecklist')}
              className="flex-row space-x-5 items-center">
              <Icon name={'check-circle'} size={25} color={'green'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Assessment Checklist
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Employees')}
              className="flex-row space-x-5 items-center">
              <Icon1 name={'users'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Employees
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Functions')}
              className="flex-row space-x-5 items-center">
              <Icon1 name={'suitcase'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Functions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Parts')}
              className="flex-row space-x-5 items-center">
              <Icon name={'settings'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Parts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Place')}
              className="flex-row space-x-5 items-center">
              <Icon2 name={'place'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Place
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Pilot')}
              className="flex-row space-x-7 items-center">
              <Icon1 name={'user'} size={25} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Pilot
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Stores')}
              className="flex-row space-x-5 items-center">
              <Icon3 name={'store'} size={22} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Stores
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Toolkit')}
              className="flex-row space-x-5 items-center">
              <Icon3 name={'toolbox'} size={23} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Tool kits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Toolstore')}
              className="flex-row space-x-4 items-center">
              <Icon3 name={'store'} size={22} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Tool Store
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Widthdetails')}
              className="flex-row space-x-5 items-center">
              <Icon3 name={'text-width'} size={23} color={'#212121'} />
              <Text className="text-[#212121] font-SemiBold text-[20px] tracking-[0.2px]">
                Width details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

export default MasterSheet;
