const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const target = document.querySelector("#ingredients");

//Формируем массив элементов для добавления в DOM
const elements = ingredients.map((item) => {
  let elem = document.createElement("li");
  elem.textContent = item;
  elem.classList.add("item");
  return elem;
});

//Добавляем все элементы в DOM за одну операцию
target.append(...elements);
