const onSizeControl = document.querySelector("#font-size-control");
const onText = document.querySelector("#text");

onText.style.fontSize = "56px";

onSizeControl.addEventListener("change", changeFontSize);

function changeFontSize() {
  onText.style.fontSize = `${this.value}px`;
}
