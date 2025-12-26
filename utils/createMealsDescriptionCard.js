const MAX_INSTRUCTION_LENGTH = 2000;
import { closePopUp } from "./closePopUp.js";

export const createMealsDescriptionCard = (meal) => {
  const detailsCard = document.getElementById("details-card");
  detailsCard.innerHTML = "";

  let ingredientsHTML = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredientsHTML += `${measure || ""} ${ingredient},  `;
    }
  }

  detailsCard.innerHTML = `
        <button id="closePopUp">Close</button>

        <div id="meal-description">
          <div style="padding: 5px; width: 70%">
            <h2>${meal.strMeal}</h2>
            <p>
              <b>Instruction :</b>${
                meal.strInstructions.length > MAX_INSTRUCTION_LENGTH
                  ? meal.strInstructions.slice(0, MAX_INSTRUCTION_LENGTH) +
                    "..."
                  : meal.strInstructions
              }",
            </p>

            <div style="display: flex; gap: 20px; padding: 10px 0">
              <p><b>Category</b> : ${meal.strCategory}</p>
              <p><b>Origin</b> : ${meal.strArea}</p>
              <a href="${meal.strYoutube}"> Watch Recipie </a>
              <p>${meal.strTags ? "#" + meal.strTags : ""}</p>
            </div>

            <p style=""><b>Ingredients : </b>${ingredientsHTML}</p>
          </div>

          <div style="width: 30%">
            <img width="100%" src="${meal.strMealThumb}" alt="" />
          </div>
        </div>
  `;

  document
    .getElementById("closePopUp")
    .addEventListener("click", () => closePopUp());
};
