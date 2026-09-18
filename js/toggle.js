const formToggler = document.getElementById('formToggler');
const formA = document.getElementById('formA');
const formB = document.getElementById('formB');
const newClient = document.getElementById('newClient');
const existingClient = document.getElementById('existingClient');

//Form Select toggle
formToggler.addEventListener('change', (e) => {
  if (e.target.checked) {
    // If switch is flipped right: Hide A, Show B
    formA.classList.add('hidden');
    formB.classList.remove('hidden');
    newClient.classList.add('disabled');
    existingClient.classList.remove('disabled');
  } else {
    // If switch is flipped left: Show A, Hide B
    formA.classList.remove('hidden');
    formB.classList.add('hidden');
    newClient.classList.remove('disabled');
    existingClient.classList.add('disabled');
  }
});