/* eslint-disable react-native/no-inline-styles */
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const Initial = ({ navigation }) => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;
  return (
    <FastImage
      source={require('../Assets/Image/initial1.gif')}
      resizeMode="contain"
      className="flex-1">
      <View className="flex-1 justify-end">
        <View
          className="justify-center items-center h-[40%] "
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            className="bg-cyan-800 p-5 rounded-full w-[300px] items-center justify-center">
            <Text className="font-bold text-white text-3xl tracking-[1px]">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FastImage>
  );
};

export default Initial;
