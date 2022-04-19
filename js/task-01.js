"use strict";

const cat = document.querySelector("ul#categories");
const catItems = cat.children;

console.log(`Number of categories: ${catItems.length}`);

for (let i = 0; i <= catItems.length; i++) {
  let ItemItems = catItems[i].children;
  let Items = ItemItems[1].children;
  console.log(`Category: ${ItemItems[0].textContent}`);
  console.log(`Elements: ${Items.length}`);
}
