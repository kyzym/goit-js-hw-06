const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("keydown", (event) => {
  output.textContent = event.currentTarget.value;
});
