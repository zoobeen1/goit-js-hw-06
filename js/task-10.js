function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Блок переменных
let firstSize = 30;
const inc = 10;
const input = document.querySelector("input");
const divTarget = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

//Functions
const createBoxes = function (amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${firstSize}px`;
    divEl.style.height = `${firstSize}px`;
    divEl.style.background = getRandomHexColor();
    divTarget.append(divEl);
    firstSize += inc;
  }
};
const destroyBoxes = function () {
  divTarget.innerHTML = "";
  firstSize = 30;
};

//Основной код
buttonCreate.addEventListener("click", () => {
  createBoxes(input.value);
});
buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});
