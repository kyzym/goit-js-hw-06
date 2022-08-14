const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const elementsArray = ingredients.map((item) => {
  const createEl = document.createElement("li");
  createEl.classList.add("item");
  createEl.textContent = item;

  return createEl;
});

list.append(...elementsArray);
