import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({text, bgColor = '#ffc700', textColor = '#020202'}) => {
  return (
    <View style={styles.container(bgColor)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    padding: 12,
    borderRadius: 8,
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
    textAlign: 'center',
  }),
});
