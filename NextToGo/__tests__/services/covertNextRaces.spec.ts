import Category from '../../src/constants/Category';
import {INextRaces, INextRacesAPI} from '../../src/interfaces/NextRaces';
import {
  convertNextRaces,
  formatTimeDiff,
} from '../../src/services/ConvertNextRaces';

describe('covertNextRaces', () => {
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

  it('describes convertNextRaces', () => {
    expect(convertNextRaces(mockResult).length).toBe(2);
    expect(convertNextRaces(mockResult)).toEqual([
      {
        raceId: 'race id 1',
        meetingName: 'meeting name 1',
        venueState: 'venue state 1',
        raceNumber: 'race number 1',
        category: Category.Horse,
        advertisedStart: formatTimeDiff('seconds 1' as any as number),
      },
      {
        raceId: 'race id 2',
        meetingName: 'meeting name 2',
        venueState: 'venue state 2',
        raceNumber: 'race number 2',
        category: Category.Greyhound,
        advertisedStart: formatTimeDiff('seconds 2' as any as number),
      },
    ]);
  });
});
