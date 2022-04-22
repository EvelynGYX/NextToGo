import Category from '../constants/Category';
import {INextRacesAPI} from '../interfaces/NextRaces';
import {RaceArray} from '../interfaces/RaceArrayType';

export const convertNextRaces = (result: INextRacesAPI): RaceArray => {
  return result.data.next_to_go_ids.map(id => {
    const nextRace = result.data.race_summaries[id];
    return {
      raceId: nextRace.race_id,
      meetingName: nextRace.meeting_name,
      venueState: nextRace.venue_state,
      raceNumber: nextRace.race_number,
      category: nextRace.category_id as Category,
      advertisedStart: nextRace.advertised_start.seconds / 60,
    };
  });
};
