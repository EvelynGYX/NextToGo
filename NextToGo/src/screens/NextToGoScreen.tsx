import React, {useState} from 'react';
import useGetApiRequest, {GetApiRequestProps} from '../apis/GetApiRequest';
import RaceItemList from '../components/raceItemList/RaceItemList';
import {config} from '../Config';
import Category from '../constants/Category';
import {INextRacesAPI} from '../interfaces/NextRaces';
import {RaceArray} from '../interfaces/RaceArray';
import {convertNextRaces} from '../services/ConvertNextRaces';
import ErrorScreen from './ErrorScreen';

const NextToGoScreen = () => {
  const converter = (json: any): RaceArray => {
    return convertNextRaces(json as INextRacesAPI);
  };

  const apiConfig: GetApiRequestProps = {
    url: config.racingURL,
    converter: converter,
    interval: 1000,
  };
  const {result, error} = useGetApiRequest(apiConfig);
  const [horseSelected, setHorseSelected] = useState<boolean>(true);
  const [greyHoundSelected, setGreyHoundSelected] = useState<boolean>(true);
  const [harnessSelected, setHarnessSelected] = useState<boolean>(true);

  let data: RaceArray;
  if (result != null) {
    data = (result as RaceArray).filter(
      race =>
        (horseSelected && race.category === Category.Horse) ||
        (greyHoundSelected && race.category === Category.Greyhound) ||
        (harnessSelected && race.category === Category.Harness),
    );
  } else {
    data = [];
  }

  const categorySelected = {
    horseSelected: horseSelected,
    greyHoundSelected: greyHoundSelected,
    harnessSelected: harnessSelected,
  };

  const onCategorySelected = (category: Category) => {
    switch (category) {
      case Category.Horse: {
        setHorseSelected(!horseSelected);
        return;
      }
      case Category.Greyhound: {
        setGreyHoundSelected(!greyHoundSelected);
        return;
      }
      case Category.Harness: {
        setHarnessSelected(!harnessSelected);
        return;
      }
    }
  };

  if (error != null) {
    return <ErrorScreen />;
  }

  return (
    <RaceItemList
      data={data}
      categorySelected={categorySelected}
      onCategorySelected={onCategorySelected}
    />
  );
};

export default NextToGoScreen;
