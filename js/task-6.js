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
buttonDestroy .addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  amount = parseInt(input.value);
  for (let i = 1; i <= amount; i += 1) {
    if ([i] >= 1 && [i] <=100) {
     const box = document.createElement('div')
        const size = 20 + i * 10;
       box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      
       box.style.backgroundColor = getRandomHexColor();
       boxes.appendChild(box); 
    }
    input.value = ''; 
  } 
}
function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

