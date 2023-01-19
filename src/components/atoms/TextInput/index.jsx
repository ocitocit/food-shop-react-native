import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = () => {
  return (
    <View>
      <Text
        style={{fontFamily: 'Poppins-Regular'}}
        className=" text-m text-[#020202]">
        Email Address
      </Text>
      <TextInputRN
        placeholder="isi dengan benar, jangan asal  !"
        className="border-solid border-[#020202] border rounded-lg p-[10px]"></TextInputRN>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
