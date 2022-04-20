"use strict";

//Вариант через querySelectorAll - но с привязкой к детям напрямую
//В этом варианте можно применить forEach (или map)
const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});

//Тоже вполне рабочий вариант
// const list = document.querySelector("#categories");
// const items = list.children;
// console.log(`Number of categories: ${items.length}`);

//Применение forEach на псевдомассивах - Array.prototype.forEach.call(pseudoArray, callback(element))
// const forEach = Array.prototype.forEach; //Ссылка на метод для более удобного использования
// forEach.call(items, (element) => {
//   let child = element.children;
//   let grendChild = child[1].children; // ;)
//   console.log(`Category: ${child[0].textContent}`);
//   console.log(`Elements: ${grendChild.length}`);
// });

//Спасибо что побудили меня покопаться) ОГРОМНОЕ!!! ;)
