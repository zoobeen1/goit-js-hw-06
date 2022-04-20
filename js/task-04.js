let counterValue = 0;
const value = document.querySelector("#value");
const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');

decButton.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});

incButton.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
