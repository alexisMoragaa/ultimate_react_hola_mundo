//tipos para seccion Meal Finder
export type Category = {
  strCategory: string;
};

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type searchForm = {
  search: string;
};

export type MealDetail = {
  [key: string]: string;
};

// Tipos para seccion context

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};
