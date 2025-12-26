import { showDetails } from "./showDetails.js";

export const createCard = (
  image,
  title,
  description = "",
  cls = "card",
  id = ""
) => {
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
