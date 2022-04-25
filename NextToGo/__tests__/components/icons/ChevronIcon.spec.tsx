import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {ChevronRightIcon} from '../../../src/components/icons/ChevronIcon';

describe('ChevronIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ChevronRightIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
