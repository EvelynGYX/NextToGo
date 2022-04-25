import React from 'react';
import renderer from 'react-test-renderer';
import RaceItem, {
  RaceItemProps,
} from '../../../src/components/raceItemList/RaceItem';
import Category from '../../../src/constants/Category';

describe('RaceItem', () => {
  it('renders correctly', () => {
    const mockProps: RaceItemProps = {
      raceId: 'some raceId',
      meetingName: 'some meetingName',
      raceNumber: 'some number' as any as number,
      category: 'some category' as any as Category,
      advertisedStart: 'some advertisedStart',
      venueState: 'some venueState',
    };
    const tree = renderer.create(<RaceItem {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
