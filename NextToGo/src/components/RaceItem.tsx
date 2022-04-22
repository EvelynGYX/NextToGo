import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ChevronRight} from '../assets/Chevron';
import RaceIcon from '../assets/RaceIcon';
import {Race} from '../interfaces/RaceArrayType';

export interface RaceItemProps extends Race {}

const RaceItem = (props: RaceItemProps) => {
  const {meetingName, venueState, raceNumber, category, advertisedStart} =
    props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <RaceIcon category={category} />
        <View style={styles.leftContent}>
          <Text>{`${meetingName} R${raceNumber}`}</Text>
          <Text>{`${venueState}`}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text>{`${advertisedStart}`}</Text>
        <View style={styles.rightIcon}>
          <ChevronRight />
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
});

export default RaceItem;