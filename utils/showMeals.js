import { createCard } from "./createCard.js";

export const showMeals = (meals, mealsContainerId) => {
  const mealsContainer = document.getElementById(mealsContainerId);
  mealsContainer.style.display = "grid";
  mealsContainer.innerHTML = "";

  for (let meal of meals) {
    const card = createCard(
      meal.strMealThumb,
      meal.strMeal,
      "",
      "card",
      meal.idMeal
    );
    mealsContainer.appendChild(card);
  }
};
