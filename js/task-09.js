function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBody = document.querySelector("body");
const onChangeBtn = document.querySelector(".change-color");
const onColorText = document.querySelector(".color");

function changeColor() {
  let color = getRandomHexColor();
  onBody.style.backgroundColor = color;
  onColorText.textContent = color;
}

onChangeBtn.addEventListener("click", changeColor);
