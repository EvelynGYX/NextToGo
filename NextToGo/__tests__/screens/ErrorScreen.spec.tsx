import React from 'react';
import renderer from 'react-test-renderer';
import ErrorScreen from '../../src/screens/ErrorScreen';

describe('ErrorScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ErrorScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
