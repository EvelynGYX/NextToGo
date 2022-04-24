import Category from '../constants/Category';

export type RaceArray = Array<IRace>;

export interface IRace {
  raceId: string;
  meetingName: string;
  raceNumber: number;
  category: Category;
  advertisedStart: string;
  venueState: string;
}
