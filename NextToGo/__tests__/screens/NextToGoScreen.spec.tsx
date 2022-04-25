import {shallow} from 'enzyme';
import React from 'react';
import {IError} from '../../src/apis/ApiInterfaces';
import * as GetApiRequestHook from '../../src/apis/GetApiRequest';
import RaceItemList from '../../src/components/raceItemList/RaceItemList';
import Category from '../../src/constants/Category';
import ErrorScreen from '../../src/screens/ErrorScreen';
import NextToGoScreen from '../../src/screens/NextToGoScreen';
describe('NextToGoScreen', () => {
  const race = {
    raceId: 'some race id',
    meetingName: 'meeting name',
    raceNumber: 'race number' as any as number,
    category: Category.Greyhound,
    advertisedStart: 'some advertisedStart',
    venueState: 'some venueState',
  };

  let useGetApiRequestMock = jest
    .spyOn(GetApiRequestHook, 'useGetApiRequest')
    .mockImplementation(jest.fn());

  it('renders ErrorScreen if error is null given useGetApiRequest returns', () => {
    useGetApiRequestMock.mockImplementation(() => ({
      result: null,
      error: 'any error' as any as IError,
    }));

    const wrapper = shallow(<NextToGoScreen />);
    expect(wrapper.find(ErrorScreen)).toExist();
  });

  it('renders RaceItemList if result is returned by useGetApiRequest', () => {
    useGetApiRequestMock.mockImplementation(() => ({
      result: [race],
      error: null,
    }));

    const wrapper = shallow(<NextToGoScreen />);
    expect(wrapper.find(RaceItemList)).toExist();
  });
});
