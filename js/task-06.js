const input = document.querySelector("#validation-input");

function validate() {
  const { value, dataset, classList } = input;
  value.length !== Number(dataset.length)
    ? classList.add("invalid")
    : classList.remove("invalid");
  classList.add("valid");
}

input.addEventListener("blur", validate);
