const formData = {
  email: '',
  message: '',
};
const feedbackForm = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';

const savedData = localStorage.getItem(storageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  feedbackForm.email.value = formData.email;
  feedbackForm.message.value = formData.message;
}

const inputHandler = event => {
  const target = event.target.name;

  if (target === 'email' || target === 'message') {
    formData[target] = event.target.value.trim();

    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
};

const submitHandler = event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);  
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
  localStorage.setItem(storageKey, JSON.stringify(formData))
};

feedbackForm.addEventListener('input', inputHandler);
feedbackForm.addEventListener('submit', submitHandler);
