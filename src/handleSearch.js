import { fetchApi } from "../utils/fetchApi.js";
import { showMeals } from "../utils/showMeals.js";

const getSearchVal = () => {
  const searchVal = document.getElementById("search-bar").value;
  return searchVal;
};

const searchByVal = (val) => {
  document.getElementById("back-btn").style.display = "block";
  fetchApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`).then(
    (data) => showMeals(data.meals, "meals")
  );
};

document.getElementById("search-bar").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("hero").style.display = "none";
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    let val = getSearchVal();
    searchByVal(val);
  }
});

document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("meals").style.display = "none";
  document.getElementById("back-btn").style.display = "none";
  document.getElementById("hero").style.display = "flex";
  document.getElementById("categories-container").style.display = "";
  document.getElementById("about").style.display = "flex";
  document.getElementById("contact").style.display = "flex";
});
