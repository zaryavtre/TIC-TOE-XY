const mainApp = document.querySelector('.main')

function mainGrid() {
  const canvas = document.createElement('grid')
  canvas.style.display = 'grid'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.gridTemplateColumns = 'repeat(3, 1fr)'
  canvas.style.gridTemplateRows = 'repeat(3, 1fr)'
  canvas.classList.add('canvas')

  mainApp.appendChild(canvas)

  let increment = 1

  for (let i = 0; i < 3 * 3; i++) {
    const gridElement = document.createElement('div')
    gridElement.style.border = 'solid 1px black'
    gridElement.style.backgroundColor = 'gray'
    gridElement.style.cursor = 'pointer'
    gridElement.style.padding = '0.5em'
    gridElement.classList.add('grid-element')
    gridElement.setAttribute('id', `${increment++}`)
    gridElement.dataset.element = 'elementgrid'
    canvas.appendChild(gridElement)
  }
}

function ticTacToeTitle() {
  const boardHeading = document.createElement('h1')
  boardHeading.classList.add('heading-1')
  const heading = document.createTextNode('Welcome to Tic Tac Toe X')
  boardHeading.appendChild(heading)
  mainApp.appendChild(boardHeading)
}

function gameBoard() {
  ticTacToeTitle()
  mainGrid()
}

const playersFactory = (player1, player2) => {
}

export { gameBoard, playersFactory }
