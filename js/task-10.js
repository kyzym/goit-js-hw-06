function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onInput = document.querySelector("input");
const onCreateBtn = document.querySelector("[data-create]");
const onDestroyBtn = document.querySelector("[data-destroy]");
const onBoxesContainer = document.querySelector("#boxes");

function createBoxes() {
  const createEl = [];
  for (let i = 0; i < Number(onInput.value); i++) {
    const boxSize = 30;
    const divEl = document.createElement("div");
    divEl.classList.add(`box`);
    divEl.style.width = `${boxSize + 10 * i}px`;
    divEl.style.height = `${boxSize + 10 * i}px`;

    divEl.style.backgroundColor = getRandomHexColor();
    createEl.push(divEl);
  }
  onBoxesContainer.append(...createEl);
}

function destroyBoxes() {
  onBoxesContainer.innerHTML = "";
  onInput.value = "";
}

onCreateBtn.addEventListener("click", createBoxes);
onDestroyBtn.addEventListener("click", destroyBoxes);
