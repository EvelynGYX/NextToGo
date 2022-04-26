import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export interface CheckIconProps {
  isChecked: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CheckIcon = (props: CheckIconProps) => {
  const isChecked = (isSelected: boolean): string => {
    if (isSelected) {
      return 'check-circle';
    } else {
      return 'circle';
    }
  };

  return (
    <FontAwesome5Icon
      style={props.style}
      name={isChecked(props.isChecked)}
      onPress={props.onPress}
      size={20}
    />
  );
};

export default React.memo(CheckIcon);
