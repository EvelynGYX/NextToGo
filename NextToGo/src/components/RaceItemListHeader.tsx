import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import RaceIcon from '../assets/RaceIcon';
import Category from '../constants/Category';
import {IFilter} from '../interfaces/Filter';

interface RaceItemListHeaderProps extends IFilter {}

const RaceItemListHeader = (props: RaceItemListHeaderProps) => {
  const isChecked = (isSelected: boolean): string => {
    if (isSelected) return 'check-circle';
    else return 'circle';
  };

  return (
    <View style={styles.container}>
      <FontAwesome5Icon
        style={styles.icon}
        name={isChecked(props.categorySelected.horseSelected)}
        onPress={() => props.onCategorySelected(Category.Horse)}
        size={20}
      />
      <RaceIcon category={Category.Horse} style={styles.icon} />
      <FontAwesome5Icon
        style={styles.icon}
        name={isChecked(props.categorySelected.greyHoundSelected)}
        onPress={() => props.onCategorySelected(Category.Greyhound)}
        size={20}
      />
      <RaceIcon category={Category.Greyhound} style={styles.icon} />
      <FontAwesome5Icon
        style={styles.icon}
        name={isChecked(props.categorySelected.harnessSelected)}
        onPress={() => props.onCategorySelected(Category.Harness)}
        size={20}
      />
      <RaceIcon category={Category.Harness} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  icon: {
    paddingRight: 8,
  },
});

export default RaceItemListHeader;
