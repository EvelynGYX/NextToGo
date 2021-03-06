/**
 * @format
 */

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App from '../App';

it('renders correctly', () => {
  jest.useFakeTimers();

  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
