import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, TextInput} from '../../components/atoms';
import {Header} from '../../components/molecules';

const SignIn = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput label="Email Address" placeHolder="isi yang bener!" />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeHolder="jangan pakai pasword yang sama melulu!"
        />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button text="Create New Account" bgColor="grey" textColor="#ffffff" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
