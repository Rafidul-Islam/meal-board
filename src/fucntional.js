const MAX_INSTRUCTION_LENGTH = 2000;

fetchApi("https://www.themealdb.com/api/json/v1/1/categories.php").then(
  (data) => {
    showCategories(data.categories, "categories");
  }
);

const loadByCategory = (category) => {
  fetchApi(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  ).then((data) => {
    showMeals(data.meals, "meals");
  });
};

// export { fetchApi, showMeals, closePopUp };
