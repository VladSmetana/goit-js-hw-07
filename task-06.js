function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  const boxes = [];
  if (amount >= 1 && amount <= 100) {
    boxesContainer.innerHTML = '';

    for (let index = 0; index < amount; index++) {
      const box = document.createElement('div');
      box.style.width = `${30 + index * 10}px`;
      box.style.height = `${30 + index * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }

    boxesContainer.append(...boxes);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}


