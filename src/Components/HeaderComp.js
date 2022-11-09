import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';

const HeaderComp = ({ name, icons, logo, nav, action }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between mb-4 mt-3">
      <View className="flex-row items-center">
        {logo && (
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
              console.log('here nav');
            }}>
            <Icon1 name={'menu'} size={25} />
          </TouchableOpacity>
        )}
        <Text className="text-[24px] font-[Urbanist-Bold] ml-4 text-[#212121]">{name}</Text>
      </View>

      {icons && (
        <TouchableOpacity onPress={() => action?.current.show()}>
          <Icon name={'dots-three-vertical'} size={21} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderComp;
