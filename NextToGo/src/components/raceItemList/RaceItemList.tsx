import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IFilter} from '../../interfaces/Filter';
import {RaceArray} from '../../interfaces/RaceArray';
import RaceItem from './RaceItem';
import RaceItemListDivider from './RaceItemListDivider';
import RaceItemListHeader from './RaceItemListHeader';

export interface RaceItemListProps extends IFilter {
  data: RaceArray;
}

const RaceItemList = (props: RaceItemListProps) => {
  if (props.data.length === 0) {
    return (
      <View style={styles.container}>
        <RaceItemListHeader {...(props as IFilter)} />
        <View style={styles.textContainer}>
          <Text>No race</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.contentWrapper}>
      <FlatList
        data={props.data}
        keyExtractor={item => item.raceId}
        renderItem={({item}) => <RaceItem {...item} />}
        ItemSeparatorComponent={RaceItemListDivider}
        ListHeaderComponent={() => (
          <RaceItemListHeader {...(props as IFilter)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  contentWrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RaceItemList;
