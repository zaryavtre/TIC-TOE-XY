import { gameBoard } from './board.js'

gameBoard()

document.addEventListener('click', function (e) {
  const clickedId = e.target.id

  const clickedElement = document.getElementById(clickedId)

  clickedElement.style.backgroundColor = 'black'
})
