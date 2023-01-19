/* eslint-disable react-native/no-inline-styles */
/// <reference types="nativewind/types" />
import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View className="bg-[#ffc700] flex-1 justify-center items-center">
      <Logo className="bg-black" />
      <Text
        style={{fontFamily: 'Poppins-Medium'}}
        className="text-[#020202] text-3xl mt-3">
        Delicious Food
      </Text>
    </View>
  );
};

export default SplashScreen;
