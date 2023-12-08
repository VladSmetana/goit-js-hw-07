const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', updateName);

function updateName() {
  const inputValue = textInput.value.trim();
  const updateName = inputValue === '' ? 'Anonymous' : inputValue;
  textOutput.textContent = updateName;
}
