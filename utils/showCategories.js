import { createCard } from "../utils/createCard.js";
import { loadByCategory } from "./loadByCategory.js";

export const showCategories = (categories, categoriesContainerId) => {
  const categoryContainer = document.getElementById(categoriesContainerId);
  categoryContainer.innerHTML = "";

  for (let category of categories) {
    const card = createCard(
      category.strCategoryThumb,
      category.strCategory
      // category.strCategoryDescription
    );
    categoryContainer.appendChild(card);
    card.addEventListener("click", () => loadByCategory(category.strCategory));
  }
};
