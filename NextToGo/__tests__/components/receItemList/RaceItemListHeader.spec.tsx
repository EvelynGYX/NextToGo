import React from 'react';
import renderer from 'react-test-renderer';
import RaceItemListHeader, {
  RaceItemListHeaderProps,
} from '../../../src/components/raceItemList/RaceItemListHeader';
import Category from '../../../src/constants/Category';

describe('RaceItemListHeader', () => {
  const mockProps: RaceItemListHeaderProps = {
    onCategorySelected: 'some categorySelected' as any as (
      category: Category,
    ) => void,
    categorySelected: {
      horseSelected: 'some horseSelected' as any as boolean,
      greyHoundSelected: 'some greyHoundSelected' as any as boolean,
      harnessSelected: 'some harnessSelected' as any as boolean,
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<RaceItemListHeader {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
