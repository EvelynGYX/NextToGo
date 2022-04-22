import Category from '../constants/Category';

export interface IFilter {
  categorySelected: {
    horseSelected: boolean;
    greyHoundSelected: boolean;
    harnessSelected: boolean;
  };
  onCategorySelected: (category: Category) => void;
}
