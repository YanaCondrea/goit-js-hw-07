const registerForm = document.querySelector(".login-form");
const button = document.querySelector("button");
button.className += 'button-form';
button.innerHTML= 'Log in';
const div = document.createElement('div');
div.className += 'container-form';
div.appendChild(registerForm);
const p = document.querySelector('p');
p.insertAdjacentElement('afterend', div);
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert('All form fields must be filled in');
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
console.log(registerForm );
