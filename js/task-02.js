const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const makeElements = (elements) => {
  return elements.map((item) => {
    const createEl = document.createElement("li");
    createEl.classList.add("item");
    createEl.textContent = item;

    return createEl;
  });
};

const elementsArray = makeElements(ingredients);
list.append(...elementsArray);
