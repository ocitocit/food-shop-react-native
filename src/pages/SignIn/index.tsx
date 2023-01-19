/// <reference types="nativewind/types" />
import React from 'react';
import {View} from 'react-native';
import {Button, Gap, TextInput} from '../../components/atoms';
import {Header} from '../../components/molecules';

const SignIn = () => {
  return (
    <View className="flex-1">
      <Header />
      <View className="bg-white px-6 py-[26px] mt-6 flex-1">
        <TextInput />
        <Gap height={25} width={0} />
        <TextInput />
        <Gap height={25} width={0} />
        <Button />
        <Button />
      </View>
    </View>
  );
};

export default SignIn;
