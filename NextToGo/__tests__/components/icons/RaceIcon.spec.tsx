import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import renderer from 'react-test-renderer';
import RaceIcon from '../../../src/components/icons/RaceIcon';
import Category from '../../../src/constants/Category';

describe('RaceIcon', () => {
  const mockStyle: StyleProp<ViewStyle> = {height: 100};
  const mockPropsArray: [string, StyleProp<ViewStyle>, Category][] = [
    ['Horse', mockStyle, Category.Horse],
    ['Greyhound', mockStyle, Category.Greyhound],
    ['Harness', mockStyle, Category.Harness],
  ];

  it.each(mockPropsArray)(
    'renders correctly with style props if category is %s ',
    (_, styles, category) => {
      const tree = renderer
        .create(<RaceIcon style={styles} category={category} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    },
  );
});
