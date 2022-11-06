import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput, Checkbox } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const AddNewCat = ({ navigation }) => {
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
      <View className="flex-1 justify-center">
        <View className="px-5 my-5 space-y-5">
          <TextInput
            className="bg-[#FAFAFA]"
            activeUnderlineColor="black"
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            className="bg-[#FAFAFA]"
            activeUnderlineColor="black"
            label="Description"
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />
          <TextInput
            className="bg-[#FAFAFA]"
            activeUnderlineColor="black"
            label="Contact Person"
            value={contact_person}
            onChangeText={(text) => setContactPerson(text)}
          />
          <TextInput
            className="bg-[#FAFAFA]"
            activeUnderlineColor="none"
            underlineColor="none"
            activeOutlineColor="none"
            label="Contact Mobile no"
            value={contact_mobile}
            onChangeText={(text) => setContactMobile(text)}
          />
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
          <View className="flex-row items-center bg-[#FAFAFA] h-[60px]">
            <Text className="text-[grey] text-[15px] ml-3 font-semibold">Published</Text>
            <Checkbox
              color="black"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <View className=" flex-row justify-center space-x-5">
            <TouchableOpacity
              onPress={() => navigation.navigate('Functions')}
              className="bg-green-500 items-center justify-center py-3 px-2 rounded-[20px] w-[100px]">
              <Text className="text-white font-semibold text-[18px]">Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-red-500 items-center justify-center py-3 px-2 rounded-[20px] w-[100px]">
              <Text className="text-white font-semibold text-[18px]">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </FastImage>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5
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
