const items = document.querySelectorAll('.item');
const total = items.length;
console.log(`Number of categories: ${total}`);
for (const item of items) {
    let category = item.firstElementChild.textContent;
    console.log(`Category: ${category}`);  
    let elements = item.lastElementChild.children.length;
   console.log(`Elements: ${elements}`); 
}


