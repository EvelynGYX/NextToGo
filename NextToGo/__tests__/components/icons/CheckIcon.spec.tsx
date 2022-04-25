import {shallow} from 'enzyme';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import renderer from 'react-test-renderer';
import CheckIcon, {
  CheckIconProps,
} from '../../../src/components/icons/CheckIcon';

describe('CheckIcon', () => {
  const mockStyle: StyleProp<ViewStyle> = {height: 100};

  let mockProps: CheckIconProps = {
    isChecked: 'some isChecked' as any as boolean,
    onPress: jest.fn(),
    style: mockStyle,
  };

  it('renders correctly', () => {
    const tree = renderer.create(<CheckIcon {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders check-circle if isSelected prop is true', () => {
    mockProps.isChecked = true;
    const wrapper = shallow(<CheckIcon {...mockProps} />);
    expect(wrapper.find(FontAwesome5Icon).props().name).toEqual('check-circle');
  });

  it('renders circle if isSelected prop is false', () => {
    mockProps.isChecked = true;
    const wrapper = shallow(<CheckIcon {...mockProps} />);
    expect(wrapper.find(FontAwesome5Icon).props().name).toEqual('check-circle');
  });
});
