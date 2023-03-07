import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, TextInput} from '../../components/atoms';
import {Header} from '../../components/molecules';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeHolder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeHolder="Type your Password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          bgColor="grey"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
