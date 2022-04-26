import {cleanup} from '@testing-library/react-hooks';
import {shallow} from 'enzyme';
import React from 'react';
import {FlatList, Text} from 'react-native';
import renderer from 'react-test-renderer';
import RaceItemList, {
  RaceItemListProps,
} from '../../../src/components/raceItemList/RaceItemList';
import RaceItemListHeader from '../../../src/components/raceItemList/RaceItemListHeader';
import Category from '../../../src/constants/Category';
import LoadingScreen from '../../../src/screens/LoadingScreen';

describe('RaceItemList', () => {
  const race = {
    raceId: 'some race id',
    meetingName: 'meeting name',
    raceNumber: 'race number' as any as number,
    category: Category.Greyhound,
    advertisedStart: 'some advertisedStart',
    venueState: 'some venueState',
  };
  let mockProps: RaceItemListProps = {
    onCategorySelected: 'some categorySelected' as any as (
      category: Category,
    ) => void,
    categorySelected: {
      horseSelected: 'some horseSelected' as any as boolean,
      greyHoundSelected: 'some greyHoundSelected' as any as boolean,
      harnessSelected: 'some harnessSelected' as any as boolean,
    },
    data: [race],
    loading: 'some loading' as any as boolean,
  };

  afterEach(cleanup);
  it('renders correctly if data prop is not empty', () => {
    mockProps.loading = false;

    const tree = renderer.create(<RaceItemList {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if data prop is empty', () => {
    mockProps.loading = false;
    mockProps.data = [];

    const tree = renderer.create(<RaceItemList {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if loading prop is true', () => {
    mockProps.loading = true;

    const tree = renderer.create(<RaceItemList {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders No race with RaceItemListHeader if data prop is an empty array', () => {
    mockProps.loading = false;
    mockProps.data = [];

    const wrapper = shallow(<RaceItemList {...mockProps} />);
    expect(wrapper.find(Text).props().children).toEqual('No race');
    expect(wrapper.exists(RaceItemListHeader)).toBe(true);
    expect(wrapper.exists(FlatList)).toBe(false);
    expect(wrapper.exists(LoadingScreen)).toBe(false);
  });

  it('renders Flatlist if data prop is not an empty array', () => {
    mockProps.loading = false;
    mockProps.data = [race];

    const wrapper = shallow(<RaceItemList {...mockProps} />);
    expect(wrapper.exists(FlatList)).toBe(true);
    expect(wrapper.exists(RaceItemListHeader)).toBe(false);
    expect(wrapper.exists(LoadingScreen)).toBe(false);
  });

  it('renders LoadingScreen with RaceItemListHeader if loading prop is true', () => {
    mockProps.loading = true;
    const wrapper = shallow(<RaceItemList {...mockProps} />);
    expect(wrapper.exists(LoadingScreen)).toBe(true);
    expect(wrapper.exists(FlatList)).toBe(false);
    expect(wrapper.exists(RaceItemListHeader)).toBe(true);
  });
});
