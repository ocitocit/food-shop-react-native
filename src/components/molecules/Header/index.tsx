import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View className="bg-white pl-6 pb-6 pt-[30px]">
      <Text
        style={{fontFamily: 'Poppins-Medium'}}
        className="text-[22px] text-[#020202]">
        Sign In
      </Text>
      <Text
        style={{fontFamily: 'Poppins-Light'}}
        className="text-[14px] text-[#8d92a3]">
        Find your ever best meal
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
