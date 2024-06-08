
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');
button.addEventListener('click', handler);

function handler() {
  let nextColor = getRandomHexColor();
  body.style.backgroundColor = nextColor;
  span.textContent = nextColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


console.log(body);
