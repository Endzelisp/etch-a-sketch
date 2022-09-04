const containerEl = document.querySelector('.cell-grid');
const gridSizeEl = document.querySelector(':root');
const boardSizeInputEl = document.querySelector('#board-size')
const boardSizeText = document.querySelector('#board-size-value')
const rainbowBtn = document.querySelector('#rainbow');
const resetBtn = document.querySelector('.buttons-container #reset')

function setGrid (size) {
  gridSizeEl.style.setProperty('--size', size);
}

function createElem (elem, numOfElem) {
let newEl;
  for (let i = 0; i < numOfElem; ++i) {
  newEl = document.createElement(elem)
  containerEl.appendChild(newEl)
  }
}

function drawBoard () {
  const boardSize = boardSizeInputEl.value;
  boardSizeText.textContent = `${boardSize} X ${boardSize}`;
  setGrid(boardSize);
  let numOfCells = (boardSize ** 2);
  console.log(numOfCells);
  containerEl.innerHTML = '';
  createElem('div', numOfCells);
}

function randomColor () {
  let red = Math.floor((Math.random() * 255) + 1);
  let green = Math.floor((Math.random() * 255) + 1);
  let blue = Math.floor((Math.random() * 255) + 1);
  return `rgb(${red}, ${green}, ${blue})`
}

function turnColorDark (color) {
  color = color.slice(4, -1)
  colorStr = ''

  for (let i = 0; i < color.length; ++i) {
    if (color[i] === ' ') {
      continue
    } else colorStr += color[i]
  };

  colorArray = colorStr.split(',');

  for (let i = 0; i < 3; ++i) {
    colorArray[i] = Math.floor(colorArray[i] * 0.9);
    if (colorArray[i] < 0) {
      colorArray[i] = 0;
    }
  }
  return `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
};

let cells;

rainbowBtn.addEventListener('pointerdown', () => {
  rainbowBtn.classList.toggle('active')
})

addEventListener('pointerover', () => {
  cells = containerEl.childNodes;
  cells.forEach(item => {
    item.addEventListener('pointerover', ()=> {
      if (rainbowBtn.classList.value === 'active') {
        item.style.setProperty('background-color', randomColor())
      }
    })
  })
})

drawBoard()

boardSizeInputEl.addEventListener('change', () => {
  drawBoard()
})

resetBtn.addEventListener('pointerdown', drawBoard)