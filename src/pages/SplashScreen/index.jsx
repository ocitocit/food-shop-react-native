import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo />
      <Gap height={38} />
      <Text style={styles.text}>Delicious Food</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    fontSize: 32,
  },
});
