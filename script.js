const containerEl = document.querySelector('.cell-grid');

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

function randomColor () {
  let red = Math.floor((Math.random() * 255) + 1);
  let green = Math.floor((Math.random() * 255) + 1);
  let blue = Math.floor((Math.random() * 255) + 1);
  return `rgb(${red}, ${green}, ${blue})`
}

createElem('div', numOfCells)

const cells = containerEl.childNodes;

cells.forEach(item => {
  item.addEventListener('mouseover', ()=> {
    let actualColor = item.style.getPropertyValue('background-color');
     if (actualColor === '') {
      item.style.setProperty('background-color', randomColor())
    }
  })
})