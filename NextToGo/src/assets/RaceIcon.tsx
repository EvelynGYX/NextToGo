import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Category from '../constants/Category';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface RaceItemIconProps {
  category: Category;
}

const RaceIcon = (props: RaceItemIconProps) => {
  return (
    <>
      {props.category === Category.Horse ? (
        <FontAwesome5Icon name="horse-head" size={20} style={styles.icon} />
      ) : props.category === Category.Greyhound ? (
        <FontAwesome5Icon style={styles.icon} name="dog" size={20} />
      ) : (
        <MaterialCommunityIcons
          style={styles.icon}
          name="horse-human"
          size={20}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: 24,
  },
});
export default RaceIcon;
