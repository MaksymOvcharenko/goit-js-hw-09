const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
form.addEventListener('input', handleInput);
form.addEventListener('submit', sendData);
returnInput();

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value;
  localStorage.setItem('feedback - form - state', JSON.stringify(formData));
}
function returnInput() {
  const data = JSON.parse(localStorage.getItem('feedback - form - state'));
  if (!data) {
    return;
  }
  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}

function sendData(event) {
  event.preventDefault();
  const { email, message } = form.elements;
  if (email.value === '' || message.value === '') {
    alert('«Fill please all fields»');
  }
  localStorage.removeItem('feedback - form - state');
  form.reset();
  formData[key] = '';
}
