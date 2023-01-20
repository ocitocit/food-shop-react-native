import React, {FC} from 'react';
import {StyleSheet, Text, TextInput as TextInputRN, View} from 'react-native';

interface TextInputProps {
  label: string;
  placeHolder: string;
}

const TextInput: FC<TextInputProps> = ({label, placeHolder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeHolder}></TextInputRN>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
  },
});
