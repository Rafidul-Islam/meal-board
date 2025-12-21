const fetchApi = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const createCard = (image, title, description = "", cls = "card", id = "") => {
  const card = document.createElement("div");
  card.classList.add(cls);
  card.id = id;

  const img = document.createElement("img");
  img.src = image;

  const h2 = document.createElement("h2");
  h2.innerText = title;

  card.append(img, h2);

  if (description) {
    const p = document.createElement("p");
    p.innerText = description;
    card.appendChild(p);
  }

  const btn = document.createElement("button");
  btn.innerText = "Details";
  btn.classList.add("btn");

  card.appendChild(btn);
  return card;
};

const showMeals = (meals, mealsContainerId) => {
  const mealsContainer = document.getElementById(mealsContainerId);
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

const showCategories = (categories, categoriesContainerId) => {
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

fetchApi("https://www.themealdb.com/api/json/v1/1/categories.php").then(
  (data) => {
    data.categories.forEach((category) => {
      showCategories(data.categories, "categories");
    });
  }
);

const loadByCategory = (category) => {
  fetchApi(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  ).then((data) => {
    data.meals.forEach((meal) => {
      showMeals(data.meals, "meals");
    });
  });
};
