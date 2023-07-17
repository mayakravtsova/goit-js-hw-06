const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let ing = [];
ingredients.forEach(ingredient => {
    const element = document.createElement("li");
    element.classList.add("item");
    element.textContent = ingredient;
    console.log(element);
    ing.push(element);
});

list.append(...ing);
