const fetchCategories = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  showCategories(data.categories);
};

const showItems = (meals) => {
  let mealsContainer = document.getElementById("meals");

  mealsContainer.innerHTML = "";

  for (let meal of meals) {
    const card = document.createElement("div");
    card.classList.add("meal-card");
    card.setAttribute("id", `${meal.idMeal}`);
    // console.log(card);

    const img = document.createElement("img");
    img.setAttribute("src", `${meal.strMealThumb}`);

    const h2 = document.createElement("h2");
    h2.innerText = `${meal.strMeal}`;

    const btn = document.createElement("button");
    btn.innerText = "Details";
    btn.classList.add("btn");

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(btn);

    mealsContainer.appendChild(card);
  }
};

const showCategories = (categories) => {
  let categoriesContainer = document.getElementById("categories");

  for (let category of categories) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `${category.strCategory}`);
    // console.log(card);

    const img = document.createElement("img");
    img.setAttribute("src", `${category.strCategoryThumb}`);

    const h2 = document.createElement("h2");
    h2.innerText = `${category.strCategory}`;

    const p = document.createElement("p");
    p.innerText = `${category.strCategoryDescription}`;

    card.appendChild(img);
    card.appendChild(h2);
    // card.appendChild(p);
    categoriesContainer.appendChild(card);

    card.addEventListener("click", () => {
      const fetchItems = async () => {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
        );
        const data = await res.json();
        showItems(data.meals);
      };
      fetchItems();
    });
  }
};

fetchCategories();
