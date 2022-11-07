/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const AddNewCat = ({ navigation }) => {
  const height = Dimensions.get('screen').height;
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' }
  ];
  const [value, setValue] = React.useState(null);
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [contact_person, setContactPerson] = React.useState('');
  const [contact_mobile, setContactMobile] = React.useState('');

  const [checked, setChecked] = React.useState(false);

  return (
    <FastImage source={require('../Assets/Image/fbg1.jpg')} resizeMode="cover" className="flex-1">
      <View style={{ height: height }} className="flex-1 justify-end">
        <ScrollView style={{ height: height }} className="pt-[175]">
          <View
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            className="bg-white px-5 mt-5 py-5 space-y-5">
            <View className="flex-row bg-[#FAFAFA] w-[100%] items-center space-x-3 pl-2 rounded-[16px]">
              <Icon name={'user'} size={21} color={'black'} />
              <TextInput
                className=""
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View className="flex-row bg-[#FAFAFA] w-[100%] items-center space-x-3 pl-2 rounded-[16px]">
              <Icon1 name={'description'} size={21} color={'black'} />
              <TextInput
                className="bg-[#FAFAFA]"
                placeholder="Description"
                value={desc}
                onChangeText={(text) => setDesc(text)}
              />
            </View>
            <View className="flex-row bg-[#FAFAFA] w-[100%] items-center space-x-3 pl-2 rounded-[16px]">
              <Icon name={'user'} size={21} color={'black'} />
              <TextInput
                className="bg-[#FAFAFA]"
                placeholder="Contact Person"
                value={contact_person}
                onChangeText={(text) => setContactPerson(text)}
              />
            </View>
            <View className="flex-row bg-[#FAFAFA] w-[100%] items-center space-x-3 pl-2 rounded-[16px]">
              <Icon1 name={'contact-phone'} size={21} color={'black'} />
              <TextInput
                className="bg-[#FAFAFA]"
                placeholder="Contact Mobile no"
                value={contact_mobile}
                onChangeText={(text) => setContactMobile(text)}
              />
            </View>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Template"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
            />
            <View className="flex-row items-center bg-[#FAFAFA] h-[46px] rounded-[16px]">
              <Text className="text-[grey] text-[15px] ml-3 font-semibold">Published</Text>
              <Checkbox
                color="black"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <View className="items-center space-y-5">
              <TouchableOpacity
                onPress={() => navigation.navigate('Functions')}
                className="bg-green-500 items-center justify-center py-3 px-2 rounded-[20px] w-[100%]">
                <Text className="text-white font-semibold text-[18px]">Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-red-500 items-center justify-center py-3 px-2 rounded-[20px] w-[100%]">
                <Text className="text-white font-semibold text-[18px]">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </FastImage>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    height: 46,
    borderRadius: 16
  },
  icon: {
    marginRight: 5
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft: 5
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
});

export default AddNewCat;
