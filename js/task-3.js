const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
const body = document.querySelector("body");
const div = document.createElement('div');
div.className += 'container-name';
div.appendChild(inputName);
div.appendChild(outputName.parentElement);
const p = document.querySelector('p');
p.insertAdjacentElement('afterend', div);
inputName.addEventListener("input", (event) => {
  
  outputName.textContent = event.currentTarget.value;
    let trimmedInput = inputName.value.trim();
    if ( trimmedInput  === '') {
        outputName.textContent = 'Anonymous';
    } else {
        outputName.textContent = trimmedInput;
    }
});

console.log(inputName);
console.log(outputName);





















