const mainApp = document.querySelector('.main')

function gameBoard() {
  const canvas = document.createElement('grid')

  mainApp.insertBefore(canvas)
}

const playersFactory = (player1, player2) => {}

export { gameBoard, playersFactory }
