import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../../constants/Category';

export interface RaceItemIconProps {
  category: Category;
  style?: StyleProp<ViewStyle>;
}

const RaceIcon = (props: RaceItemIconProps) => {
  return (
    <>
      {props.category === Category.Horse ? (
        <FontAwesome5Icon style={props.style} name="horse-head" size={20} />
      ) : props.category === Category.Greyhound ? (
        <FontAwesome5Icon style={props.style} name="dog" size={20} />
      ) : (
        <MaterialCommunityIcons
          style={props.style}
          name="horse-human"
          size={20}
        />
      )}
    </>
  );
};

export default RaceIcon;
