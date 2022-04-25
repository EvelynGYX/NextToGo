import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IRace} from '../../interfaces/RaceArray';
import {ChevronRightIcon} from '../icons/ChevronIcon';
import RaceIcon from '../icons/RaceIcon';

export type RaceItemProps = IRace;

const RaceItem = (props: RaceItemProps) => {
  const {meetingName, venueState, raceNumber, category, advertisedStart} =
    props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <RaceIcon category={category} style={styles.leftIcon} />
        <View style={styles.leftContent}>
          <Text>{`${meetingName} R${raceNumber}`}</Text>
          <Text>{venueState}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text>{advertisedStart}</Text>
        <View style={styles.rightIcon}>
          <ChevronRightIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContent: {
    flexDirection: 'column',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    paddingLeft: 4,
  },
  leftIcon: {
    paddingRight: 24,
  },
});

export default RaceItem;
