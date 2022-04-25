import React from 'react';
import {StyleSheet, View} from 'react-native';
import Category from '../../constants/Category';
import {IFilter} from '../../interfaces/Filter';
import CheckIcon, {CheckIconProps} from '../icons/CheckIcon';
import RaceIcon from '../icons/RaceIcon';

export type RaceItemListHeaderProps = IFilter;

interface IHeaderConfig extends CheckIconProps {
  category: Category;
}

const RaceItemListHeader = (props: RaceItemListHeaderProps) => {
  const headerConfigs: IHeaderConfig[] = [
    {
      isChecked: props.categorySelected.horseSelected,
      onPress: () => props.onCategorySelected(Category.Horse),
      category: Category.Horse,
    },
    {
      isChecked: props.categorySelected.greyHoundSelected,
      onPress: () => props.onCategorySelected(Category.Greyhound),
      category: Category.Greyhound,
    },
    {
      isChecked: props.categorySelected.harnessSelected,
      onPress: () => props.onCategorySelected(Category.Harness),
      category: Category.Harness,
    },
  ];

  return (
    <View style={styles.container}>
      {headerConfigs.map((config, index) => (
        <View style={styles.content} key={index}>
          <CheckIcon
            isChecked={config.isChecked}
            onPress={config.onPress}
            style={styles.icon}
          />
          <RaceIcon category={config.category} style={styles.icon} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  content: {
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 8,
  },
});

export default RaceItemListHeader;
