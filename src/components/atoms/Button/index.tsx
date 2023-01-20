import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

const Button: FC<ButtonProps> = ({
  text,
  bgColor = 'ffc700',
  textColor = '#020202',
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      padding: 12,
      borderRadius: 8,
    },
    text: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: textColor,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Button;
