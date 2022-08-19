const input = document.querySelector("#validation-input");

function validate() {
  let { value, dataset, classList } = input;
  value = value.trim();
  if (value.length !== Number(dataset.length)) {
    classList.add("invalid");
  } else {
    classList.remove("invalid");
    classList.add("valid");
  }
}

input.addEventListener("blur", validate);
