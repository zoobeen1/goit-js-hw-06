const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const Target = document.querySelector("ul#ingredients");

ingredients.forEach((item) => {
  let elem = document.createElement("li");
  elem.textContent = item;
  elem.classList.add("item");
  Target.append(elem);
});
