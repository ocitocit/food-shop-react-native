import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const Select = () => {
  return (
    <View>
      <Text>Label Select Options</Text>
      <Picker
      // selectedValue={selectedLanguage}
      // onValueChange={(itemValue, itemIndex) =>
      //   setSelectedLanguage(itemValue)
      // }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="jsx" />
      </Picker>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
