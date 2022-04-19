let counterValue = 0;

const value = document.querySelector("#value");

const decButton = document.querySelector('button[data-action="decrement"]');
decButton.addEventListener("click", (e) => {
  counterValue--;
  value.textContent = counterValue;
});

const incButton = document.querySelector('button[data-action="increment"]');
incButton.addEventListener("click", (e) => {
  counterValue++;
  value.textContent = counterValue;
});
