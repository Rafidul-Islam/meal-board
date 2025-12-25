const MAX_INSTRUCTION_LENGTH = 2000;

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

  btn.addEventListener("click", () => showDetails(id));
  return card;
};

const showDetails = (id) => {
  console.log(id);
  document.getElementById("details-card").style.display = "block";
  fetchApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(
    (data) => createMealsDescriptionCard(data.meals[0])
  );
};

const closePopUp = () => {
  document.getElementById("details-card").style.display = "none";
};

const createMealsDescriptionCard = (meal) => {
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
    //Same mistake here. Why loop here.
    // data.categories.forEach((category) => {
    showCategories(data.categories, "categories");
    // });
  }
);

const loadByCategory = (category) => {
  fetchApi(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  ).then((data) => {
    // Why lopping here unnecessaarily.
    // data.meals.forEach((meal) => {
    showMeals(data.meals, "meals");
    // });
  });
};

export { fetchApi, showMeals, closePopUp };
