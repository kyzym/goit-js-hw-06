let counterValue = 0;

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

function increment() {
  (counterValue += 1), (valueEl.textContent = counterValue);
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

decrBtn.addEventListener("click", decrement);
incrBtn.addEventListener("click", increment);
