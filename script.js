const containerEl = document.querySelector('.cells-container');

let gridSizeEl = document.querySelector(':root');

let numOfCells = 100;

let gridSize = Math.sqrt(numOfCells)

gridSizeEl.style.setProperty('--rows-and-columns', gridSize)

function createElem (elem, numOfElem) {
let newEl;
  for (let i = 0; i < numOfElem; ++i) {
  newEl = document.createElement(elem)
  newEl.classList.add('cells-bg-color')
  containerEl.appendChild(newEl)
  }
  
}

createElem('div', numOfCells)

