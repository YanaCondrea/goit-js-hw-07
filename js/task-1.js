const items = document.querySelectorAll('.item');
const total = items.length;
console.log(`Number of categories: ${total}`);
for (const item of items) {
    let category = item.firstElementChild.textContent;
    console.log(`Category: ${category}`);  
    let elements = item.lastElementChild.children.length;
   console.log(`Elements: ${elements}`); 
}


// const categories = document.querySelectorAll('#categories .item');

// console.log('Number of categories:', categories.length);

// categories.forEach(category => {
//     const title = category.querySelector('h2').textContent;
//     const items = category.querySelectorAll('ul li').length;

//     console.log(`Category: ${title} - Items: ${items}`);
// });