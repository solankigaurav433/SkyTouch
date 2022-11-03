import { View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    name: 'ABC',
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
  }
];

const renderItem = ({ item }) => {
  return (
    <View>
      <View className="bg-[#FFFFFF] rounded-[16px] p-2 my-2">
        <View className="flex-row justify-around pb-1">
          <Text className="font-bold text-black text-lg">Name</Text>
          <Text className="font-bold text-black text-lg">Description</Text>
        </View>
        <View className="flex-row justify-around py-1">
          <Text className="font-semibold text-black text-md">{item.name}</Text>
          <Text className="font-semibold text-black text-md">{item.description}</Text>
        </View>
        <View className="border-[0.2px] border-gray-300 my-2" />
        <View className="flex-row justify-between">
          <View className="flex-row space-x-2 justify-center items-center">
            <TouchableOpacity>
              <Text className="font-medium text-black text-md">View</Text>
            </TouchableOpacity>
            <Text className="font-medium text-black text-md">{'/'}</Text>
            <TouchableOpacity>
              <Text className="font-medium text-black text-md">Edit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center pb-2 text-black font-medium">Action</Text>
            <View className="flex-row space-x-2">
              <TouchableOpacity className="bg-blue-500 items-center justify-center p-1 rounded-md">
                <Text className="text-white text-[10px] w-[30px] text-center font-medium">
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-500 items-center justify-center p-1 rounded-md">
                <Text className="text-white text-[10px] w-[30px] text-center font-medium">
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Functions = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView className="flex-1 mx-5 my-5">
        <FlatList
          ListHeaderComponent={() => (
            <View className="flex-row justify-end space-x-2">
              <TouchableOpacity className="bg-blue-500 items-center justify-center p-2 rounded-md">
                <Text className="text-white">Add New</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-500 items-center justify-center p-2 rounded-md">
                <Text className="text-white">Close</Text>
              </TouchableOpacity>
            </View>
          )}
          data={data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Functions;
