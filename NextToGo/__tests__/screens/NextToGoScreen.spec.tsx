import {mount} from 'enzyme';
import React from 'react';
import {act} from 'react-test-renderer';
import {IError} from '../../src/apis/ApiInterfaces';
import * as GetApiRequestHook from '../../src/apis/GetApiRequest';
import RaceItemList from '../../src/components/raceItemList/RaceItemList';
import Category from '../../src/constants/Category';
import NextToGoScreen from '../../src/screens/NextToGoScreen';
describe('NextToGoScreen', () => {
  //   jest.mock('../../src/apis/GetApiRequest');
  //   const mockUseGetApiRequest = useGetApiRequest as jest.MockedFunction<
  //     typeof useGetApiRequest
  //   >;

  const race = {
    raceId: 'some race id',
    meetingName: 'meeting name',
    raceNumber: 'race number' as any as number,
    category: Category.Greyhound,
    advertisedStart: 'some advertisedStart',
    venueState: 'some venueState',
  };

  const useGetApiRequestMock = jest.spyOn(
    GetApiRequestHook,
    'useGetApiRequest',
  );
  // .mockImplementation((jest.fn()));

  it('renders ErrorScreen if error is null given useGetApiRequest returns', () => {
    useGetApiRequestMock.mockImplementation(() => ({
      result: null,
      error: 'any error' as any as IError,
    }));

    const wrapper = mount(<NextToGoScreen />);
    act(() => {
      wrapper;
    });
    expect(wrapper.find(RaceItemList)).toExist();
  });
});
