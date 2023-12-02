// Get Elements
const color1 = document.querySelector('.one');
const color2 = document.querySelector('.two');
const color3 = document.querySelector('.three');
const color4 = document.querySelector('.four');
const randomizeButton = document.getElementById('button-random-color');
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBoard = document.getElementById('clear-board');

// Set Default Colors
color1.style.backgroundColor = 'rgb(0, 0, 0)';
color2.style.backgroundColor = 'rgb(255, 2, 2)';
color3.style.backgroundColor = 'rgb(0, 4, 255)';
color4.style.backgroundColor = 'rgb(77, 236, 215)';

color1.classList.add('selected');

function storageColors() {
  const colors = [];
  colors.push(color2.style.backgroundColor);
  colors.push(color3.style.backgroundColor);
  colors.push(color4.style.backgroundColor);
  localStorage.setItem('colorPalette', JSON.stringify(colors));
}

function randomColors() {
  localStorage.clear();
  color2.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, 
    ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
  color3.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, 
    ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
  color4.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, 
    ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
  storageColors();
}

window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) {
    storageColors();
  } else {
    const [index0, index1, index2] = JSON.parse(localStorage.getItem('colorPalette'));
    color2.style.backgroundColor = index0;
    color3.style.backgroundColor = index1;
    color4.style.backgroundColor = index2;
  }
};

randomizeButton.addEventListener('click', randomColors);

for (let index = 0; index < 25; index += 1) {
  const pixelDiv = document.createElement('div');
  pixelDiv.setAttribute('class', 'pixel');
  pixelBoard.appendChild(pixelDiv);
}

let selectedColor = '#000';

colorPalette.addEventListener('click', ({ target }) => {
  const corSelect = document.querySelector('.selected');
  corSelect.classList.remove('selected');
  target.classList.add('selected');
  selectedColor = target.style.backgroundColor;
});

function paintPixel({ target }) {
  const selectedPixel = target;
  selectedPixel.style.backgroundColor = selectedColor;
}

pixelBoard.addEventListener('click', paintPixel);

clearBoard.addEventListener('click', () => {
  const pixels = pixelBoard.children;
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});
