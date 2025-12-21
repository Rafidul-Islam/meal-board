const getCategories = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  showCategories(data.categories);
};

const getItem = async (category) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await res.json();
  showItem(data);
};

const showItem = (data) => {
  console.log(data);
  const items = document.getElementById("items");

  for (let item of data.meals) {
    //Card
    const card = document.createElement("div");
    card.classList.add("itemCard");

    const img = document.createElement("img");
    img.setAttribute("src", `${item.strMealThumb}`);

    const h1 = document.createElement("h1");
    h1.innerText = item.strMeal;

    card.appendChild(img);
    card.appendChild(h1);
    items.appendChild(card);

    card.addEventListener("click", () => getItem(item.strCategory));
  }
};

const showCategories = (data) => {
  //Container for all categories
  const categories = document.getElementById("categories");

  for (let item of data) {
    //Card
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", `${item.strCategoryThumb}`);

    const h1 = document.createElement("h1");
    h1.innerText = item.strCategory;

    card.appendChild(img);
    card.appendChild(h1);
    categories.appendChild(card);

    card.addEventListener("click", () => getItem(item.strCategory));
  }
};

getCategories();
