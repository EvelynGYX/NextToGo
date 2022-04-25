import {renderHook} from '@testing-library/react-hooks';
import {act} from '@testing-library/react-native';
import useGetApiRequest, {
  GetApiRequestProps,
} from '../../src/apis/GetApiRequest';
import Category from '../../src/constants/Category';
import {INextRaces, INextRacesAPI} from '../../src/interfaces/NextRaces';

const mockNumber = 'some number' as any as number;
const mockString = 'some string';
const mockNextRaces: INextRaces = {
  next_to_go_ids: ['test1', 'test2'],
  race_summaries: {
    test1: {
      race_id: 'race id 1',
      race_name: mockString,
      race_number: 'race number 1' as any as number,
      meeting_id: mockString,
      meeting_name: 'meeting name 1',
      category_id: Category.Horse,
      advertised_start: {
        seconds: 'seconds 1' as any as number,
      },
      race_form: {
        distance: 1400,
        distance_type: {
          id: mockString,
          name: mockString,
          short_name: mockString,
        },
        distance_type_id: mockString,
        track_condition: {
          id: mockString,
          name: mockString,
          short_name: mockString,
        },
        track_condition_id: mockString,
        weather: {
          id: mockString,
          name: mockString,
          short_name: mockString,
          icon_uri: mockString,
        },
        weather_id: mockString,
        race_comment: mockString,
        additional_data: mockString,
        generated: mockNumber,
        silk_base_url: mockString,
        race_comment_alternative: mockString,
      },
      venue_id: mockString,
      venue_name: mockString,
      venue_state: 'venue state 1',
      venue_country: mockString,
    },
    test2: {
      race_id: 'race id 2',
      race_name: mockString,
      race_number: 'race number 2' as any as number,
      meeting_id: mockString,
      meeting_name: 'meeting name 2',
      category_id: Category.Greyhound,
      advertised_start: {
        seconds: 'seconds 2' as any as number,
      },
      race_form: {
        distance: 1400,
        distance_type: {
          id: mockString,
          name: mockString,
          short_name: mockString,
        },
        distance_type_id: mockString,
        track_condition: {
          id: mockString,
          name: mockString,
          short_name: mockString,
        },
        track_condition_id: mockString,
        weather: {
          id: mockString,
          name: mockString,
          short_name: mockString,
          icon_uri: mockString,
        },
        weather_id: mockString,
        race_comment: mockString,
        additional_data: mockString,
        generated: mockNumber,
        silk_base_url: mockString,
        race_comment_alternative: mockString,
      },
      venue_id: mockString,
      venue_name: mockString,
      venue_state: 'venue state 2',
      venue_country: mockString,
    },
  },
};

const mockResult: INextRacesAPI = {
  data: mockNextRaces,
  status: mockNumber,
  message: mockString,
};

describe('useGetApiRequest', () => {
  const setIntervalMock = jest
    .spyOn(global, 'setInterval')
    .mockImplementation(jest.fn());
  const clearIntervalMock = jest
    .spyOn(global, 'clearInterval')
    .mockImplementation(jest.fn());
  const propsMock: GetApiRequestProps = {
    url: 'some url',
    converter: jest.fn(),
    interval: 1,
  };

  beforeEach(() => {
    clearIntervalMock.mockClear();
  });

  const mockSuccesfulResponse = (status: number = 200, returnBody?: object) => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status,
          json: () => Promise.resolve(returnBody),
        });
      });
    });
  };

  describe('fetches url', () => {
    it('sets interval when mounting', () => {
      mockSuccesfulResponse(200, mockResult);

      const {result} = act(() => {
        renderHook(() => {
          useGetApiRequest(propsMock);
        });
      });
      setIntervalMock.mock.calls[0][0]();

      expect(setIntervalMock).toHaveBeenCalledWith(jasmine.anything(), 1);
    });

    it('clears interval when unmounting', () => {
      const hook = renderHook(() => useGetApiRequest(propsMock));
      expect(clearIntervalMock).not.toHaveBeenCalled();

      hook.unmount();
      expect(clearIntervalMock).toHaveBeenCalled();
    });
  });
});
