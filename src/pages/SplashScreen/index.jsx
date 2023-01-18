import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

function SplashScreen() {
  return (
    <View className="bg-[#ffc700] flex-grow justify-center items-center">
      <Logo className="bg-black" />
      <Text
        style={{fontFamily: 'Poppins-Medium'}}
        className="text-[#020202] text-3xl mt-3">
        Delicious Food
      </Text>
    </View>
  );
}

export default SplashScreen;
