import { fetchApi } from "../utils/fetchApi.js";
import { showCategories } from "../utils/showCategories.js";

const CATEGORIES_ENDPOINT =
  "https://www.themealdb.com/api/json/v1/1/categories.php";

fetchApi(CATEGORIES_ENDPOINT).then((categories) => {
  showCategories(categories.categories, "categories");
});
