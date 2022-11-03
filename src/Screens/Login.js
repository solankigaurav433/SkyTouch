/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [userEmailInput, setUserEmailInput] = useState(false);
  const [userPassInput, setUserPassInput] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  return (
    <SafeAreaView className="bg-[#FFFFFF] flex-1 ">
      <ScrollView className="bg-white h-[100%]">
        <SafeAreaView className="bg-white h-[100%] my-7 justify-center flex-1">
          <View className="items-center mx-[24px]">
            <View>
              <Text className="text-5xl text-[#212121] tracking-[1px]">Sky Touch</Text>
            </View>
            <Text className="text-[28px] my-[30px] text-[#212121]">Login to Your Account</Text>
            <View
              style={{
                borderColor: userEmailInput ? '#35383F' : null,
                borderWidth: userEmailInput ? 1 : null
              }}
              className="w-[100%] h-[60px] mb-[10px] flex-row items-center bg-[#FAFAFA] rounded-[16px] p-2">
              <Icon name="mail" color={userEmailInput ? '#212121' : '#9E9E9E'} size={20} />
              <TextInput
                cursorColor={'#212121'}
                placeholder="Email"
                // onChangeText={(text) => setEmail(text)}
                placeholderTextColor={userEmailInput ? '#212121' : '#9E9E9E'}
                onFocus={() => setUserEmailInput(true)}
                onBlur={() => setUserEmailInput(false)}
                style={{
                  color: userEmailInput ? '#212121' : '#9E9E9E'
                }}
                className="flex-1 font-[400] ml-3 text-[14px] text-[#9E9E9E] tracking-[0.2px]"
              />
            </View>
            <View
              style={{
                borderColor: userPassInput ? '#35383F' : null,
                borderWidth: userPassInput ? 1 : null
              }}
              className="w-[100%] h-[60px] flex-row items-center bg-[#FAFAFA] rounded-[16px] my-[12px] p-2">
              <Icon name="lock-closed" color={userPassInput ? '#212121' : '#9E9E9E'} size={20} />
              <TextInput
                cursorColor={'#212121'}
                style={{
                  color: userPassInput ? '#212121' : '#9E9E9E'
                }}
                // onChangeText={(text) => setPassword(text)}
                secureTextEntry={showPassword}
                placeholder="Password"
                placeholderTextColor={userPassInput ? '#212121' : '#9E9E9E'}
                onFocus={() => setUserPassInput(true)}
                onBlur={() => setUserPassInput(false)}
                className="flex-1 font-[400] ml-3 text-[14px]"
              />
              <Icon
                onPress={() => setShowPassword(!showPassword)}
                name={showPassword ? 'eye' : 'eye-off'}
                color={userPassInput ? '#212121' : '#9E9E9E'}
                size={23}
              />
            </View>
            <TouchableOpacity
              // onPress={handleSubmit}
              onPress={() => navigation.navigate('Dashboard')}
              className="w-[100%]  justify-center h-[55px] my-[10px] rounded-full bg-[#004F82] items-center">
              <Text className="text-[#FFFFFF] text-[16px] tracking-[0.2px]">Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity className="my-[12px]">
              <Text className="text-[#101010] tracking-[0.2px] text-[16px]">
                Forgot the password?
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
