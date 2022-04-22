import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import RaceItemListDivider from './RaceItemListDivider';
import RaceItem from './RaceItem';
import RaceItemListHeader from './RaceItemListHeader';
import {IFilter} from '../interfaces/Filter';
import {RaceArray} from '../interfaces/RaceArrayType';

interface RaceItemListProps extends IFilter {
  data: RaceArray;
}

const RaceItemList = (props: RaceItemListProps) => {
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
  contentWrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
});

export default RaceItemList;
