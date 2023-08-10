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

  for(let i = 0; i < 3 * 3; i++) {
    let increment = 0
    const gridElement = document.createElement('div')
    gridElement.style.border = 'solid 1px black'
    gridElement.classList.add(`${increment += 1}`)
    canvas.appendChild(gridElement)
  }
}

function gameBoard() {
  mainGrid()
  const boardHeading = document.createElement('h1')
  const heading = document.createTextNode('Welcome to Tic Tac Toe X')
  boardHeading.appendChild(heading)
  mainApp.appendChild(boardHeading)

}



const playersFactory = (player1, player2) => {}

export { gameBoard, playersFactory }
