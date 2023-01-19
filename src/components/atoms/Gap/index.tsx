import React from 'react';
import {View} from 'react-native';

interface GapProps {
  width: number;
  height: number;
}

const Gap: React.FC<GapProps> = ({width, height}) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
