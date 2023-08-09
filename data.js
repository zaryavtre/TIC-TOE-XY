const mainApp = document.querySelector('.main')

function gameBoard() {
  const canvas = document.createElement('grid')
  const boardHeading = document.createElement('h1')
  const heading = document.createTextNode('Welcome to Tic Tac Toe X')
  boardHeading.appendChild(heading)
  canvas.style.display = 'grid'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.gridTemplateColumns = 'repeat(3, 1fr)'
  canvas.style.gridTemplateRows = 'repeat(3, 1fr)'
  canvas.classList.add('canvas')
  mainApp.appendChild(boardHeading)
  mainApp.appendChild(canvas)
}

const playersFactory = (player1, player2) => {}

export { gameBoard, playersFactory }
