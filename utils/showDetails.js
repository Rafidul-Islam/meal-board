import { fetchApi } from "./fetchApi.js";
import { createMealsDescriptionCard } from "./createMealsDescriptionCard.js";

export const showDetails = (id) => {
  document.getElementById("details-card").style.display = "block";
  fetchApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(
    (data) => createMealsDescriptionCard(data.meals[0])
  );
};
