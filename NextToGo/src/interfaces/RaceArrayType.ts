import Category from '../constants/Category';

export type RaceArray = Array<Race>;

export type Race = {
  raceId: string;
  meetingName: string;
  raceNumber: number;
  category: Category;
  advertisedStart: string;
  venueState: string;
};
