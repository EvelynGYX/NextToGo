import React from 'react';
import {StyleSheet, View} from 'react-native';

const RaceItemListDivider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginRight: 4,
  },
});

export default RaceItemListDivider;
