const div = document.querySelector('#controls');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

const divContainer = document.createElement('div');
divContainer.className += 'container';
divContainer.appendChild(div);
divContainer.appendChild(boxes);
const p = document.querySelector('p');
p.insertAdjacentElement('afterend', divContainer);

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const elements = [];
  amount = parseInt(input.value);
  if (amount < 1 || amount > 100) {
    input.value = '';
    return alert('Please enter a number between 1 and 100.');  
  }
  let size = 30;
  boxes.innerHTML = '';
  input.value = ''; 
  for (let i = 1; i <= amount; i += 1) {
     const box = document.createElement('div')
      
       box.style.width = `${size}px`;
      box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(box);    
  }
  boxes.append(...elements);
  
}


function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

