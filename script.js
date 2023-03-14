const cor1 = document.querySelector('.one');
const cor2 = document.querySelector('.two');
const cor3 = document.querySelector('.three');
const cor4 = document.querySelector('.four');
const botaoCores = document.getElementById('button-random-color');
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const pixel = document.querySelector('.pixel');

function coresAleatorias() {
  localStorage.clear();
  cor2.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, 
  ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
  cor3.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, 
  ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
  cor4.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, 
  ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
  localStorage.setItem('colorPalette', colorPalette);
}

botaoCores.addEventListener('click', coresAleatorias);

for (let index = 0; index < 25; index += 1) {
  const pixelDiv = document.createElement('div');
  pixelDiv.setAttribute('class', 'pixel');
  pixelBoard.appendChild(pixelDiv);
}

cor1.classList.add('selected');

let corSelecionada = 'black';

colorPalette.addEventListener('click', (event) => {
    const corSelect = document.querySelector('.selected');
    corSelect.classList.remove('selected');
    event.target.classList.add('selected');
    corSelecionada = event.target.style.backgroundColor;
});

function pintarPixel(event) {
    const pixelSelecionado = event.target;
    pixelSelecionado.style.backgroundColor = corSelecionada;
}

pixelBoard.addEventListener('click', pintarPixel);