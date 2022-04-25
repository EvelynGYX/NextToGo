import moment from 'moment';
import Category from '../constants/Category';
import {INextRacesAPI} from '../interfaces/NextRaces';
import {RaceArray} from '../interfaces/RaceArray';

export function formatTimeDiff(seconds: number): string {
  const diff = moment.unix(seconds).diff(moment(), 'seconds');
  return diff >= 0
    ? moment
        .utc(diff * 1000)
        .format('mm[m] ss[s]')
        .replace(/0(?=[1-9][s|m])|0{2}[s|m]/g, '')
        .trim()
    : moment
        .utc(-diff * 1000)
        .format('[-]mm[m] ss[s]')
        .replace(/0(?=[1-9][s|m])|0{2}[s|m]/g, '')
        .trim();
}

export const convertNextRaces = (result: INextRacesAPI): RaceArray => {
  return result.data.next_to_go_ids.map(id => {
    const nextRace = result.data.race_summaries[id];
    return {
      raceId: nextRace.race_id,
      meetingName: nextRace.meeting_name,
      venueState: nextRace.venue_state,
      raceNumber: nextRace.race_number,
      category: nextRace.category_id as Category,
      advertisedStart: formatTimeDiff(nextRace.advertised_start.seconds),
    };
  });
};
