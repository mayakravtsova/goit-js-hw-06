//const catCount = document.getElementById('categories').querySelectorAll('.item');
const catCount = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${catCount.length}`);

catCount.forEach(el => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelector('ul').children.length}`); 
});
