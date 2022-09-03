const containerEl = document.querySelector('.cell-grid');
const colInputEl = document.querySelector('#col')
const rowInputEl = document.querySelector('#row')
const setSqBtn = document.querySelector('#setSq')
const gridSizeEl = document.querySelector(':root');

function setGrid () {
  let columns = colInputEl.value;
  let rows = rowInputEl.value;
  gridSizeEl.style.setProperty('--col', columns)
  gridSizeEl.style.setProperty('--row', rows)
  return [columns, rows]
}

function createElem (elem, numOfElem) {
let newEl;
  for (let i = 0; i < numOfElem; ++i) {
  newEl = document.createElement(elem)
  containerEl.appendChild(newEl)
  }
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

setSqBtn.addEventListener('click', () => {
  let sqSize = setGrid()
  let numOfCells = sqSize[0] * sqSize[1];
  containerEl.innerHTML = '';
  createElem('div', numOfCells)

  const cells = containerEl.childNodes;

  cells.forEach(item => {
    item.addEventListener('mouseover', ()=> {
      let actualColor = item.style.getPropertyValue('background-color');
      if (actualColor === '') {
        item.style.setProperty('background-color', randomColor())
      } else if (actualColor !== ''){
        let darker = turnColorDark(actualColor);
        console.log(darker)
        item.style.setProperty('background-color', darker)
      }
    })
  })
})