import React from 'react';
import renderer from 'react-test-renderer';
import RaceItemListDivider from '../../../src/components/raceItemList/RaceItemListDivider';

describe('RaceItemListDivider', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RaceItemListDivider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
