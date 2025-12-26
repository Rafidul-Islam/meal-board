import { fetchApi } from "./fetchApi.js";
import { showMeals } from "./showMeals.js";

export const loadByCategory = (category) => {
  fetchApi(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  ).then((data) => {
    showMeals(data.meals, "meals");
  });
};
