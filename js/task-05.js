const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  let nameValue = event.currentTarget.value.trim();
  output.textContent = nameValue;
  if (!textInput.value.length) {
    output.textContent = "Anonymous";
  }
});
