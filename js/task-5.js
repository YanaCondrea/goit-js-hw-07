const changeColor = document.querySelector('.change-color');
const areaColor = document.querySelector('body');
const spanColor = document.querySelector('.color');
changeColor.addEventListener('click', getRandomHexColor);
const colors = ['rgba(234, 226, 31, 1)', 'rgba(97, 179, 255, 1)', 'rgba(255, 97, 192, 1)', 'rgba(59, 199, 107, 1)'];
function getRandomHexColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
   let selectedColor = colors[randomIndex];
   areaColor.style.backgroundColor = selectedColor;
    spanColor.textContent = selectedColor;
}


console.log(changeColor);
console.log(areaColor);

