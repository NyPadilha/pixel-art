const cor2 = document.querySelector(".two");
const cor3 = document.querySelector(".three");
const cor4 = document.querySelector(".four");
const botaoCores = document.getElementById('button-random-color');
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

botaoCores.addEventListener("click", coresAleatorias);

function coresAleatorias() {
    localStorage.clear()
    cor2.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
    cor3.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;
    cor4.style.backgroundColor = `rgb(${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0}, ${Math.random() * (250 - 0) + 0})`;   
    localStorage.setItem('colorPalette', colorPalette);
};


for (let index = 0; index < 25; index++) {
    let pixelDiv = document.createElement('div')
    pixelDiv.setAttribute('class', 'pixel')
    pixelBoard.appendChild(pixelDiv);
};