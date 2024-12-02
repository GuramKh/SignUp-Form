const form = document.getElementById('signup-form');
const inputs = {
firstName: document.getElementById('firstName'),
lastName: document.getElementById('lastName'),
email: document.getElementById('email'),
password: document.getElementById('password')
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Object.values(inputs).forEach(input => {
  input.addEventListener('input', function() {
      this.classList.remove('error');
      const errorMessage = this.closest('.input-group').querySelector('.error-message');
      errorMessage.textContent = '';
  });
});

form.addEventListener('submit', (e) => {
e.preventDefault();
let isValid = true;

clearErrors();

Object.keys(inputs).forEach(field => {
    const input = inputs[field];
        
    if (!input.value) {
        showError(input, `${formatFieldName(field)} cannot be empty`);
        isValid = false;
    } else if (field === 'email' && !emailRegex.test(input.value)) {
        showError(input, 'Looks like this is not an email');
        isValid = false;
    }
});

if (isValid) {
    console.log('Form submitted successfully');
}
});

function showError(input, message) {
const inputGroup = input.closest('.input-group');
const errorMessage = inputGroup.querySelector('.error-message');
input.classList.add('error');
errorMessage.textContent = message;
}

function clearErrors() {
Object.values(inputs).forEach(input => {
    input.classList.remove('error');
    input.closest('.input-group').querySelector('.error-message').textContent = '';
});
}

function formatFieldName(field) {
return field.replace(/([A-Z])/g, ' $1').trim();
}
