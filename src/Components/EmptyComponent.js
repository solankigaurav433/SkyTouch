import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const EmptyComponent = ({ text }) => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;
  return (
    <View
      className="bg-white justify-center items-center w-[100%]"
      style={{ height: height - 200 }}>
      <View className="items-center my-[36]">
        <Text className="text=[#212121] font-[Urbanist-Bold] text-[#212121] text-[22px] my-1">
          {text}
        </Text>
      </View>
    </View>
  );
};

export default EmptyComponent;
