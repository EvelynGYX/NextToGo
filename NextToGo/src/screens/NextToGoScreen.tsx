import React, {useState} from 'react';
import {View} from 'react-native';
import useGetApiRequest, {GetApiRequestProps} from '../apis/getApiRequest';
import RaceItemList from '../components/RaceItemList';
import {config} from '../config';
import Category from '../constants/Category';
import {convertNextRaces} from '../services/covertNextRaces';
import {INextRacesAPI} from '../interfaces/NextRaces';
import {Race, RaceArray} from '../interfaces/RaceArrayType';

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
  console.log('yes');

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

  return (
    <View>
      <RaceItemList
        data={data}
        categorySelected={categorySelected}
        onCategorySelected={onCategorySelected}
      />
    </View>
  );
};

export default NextToGoScreen;
