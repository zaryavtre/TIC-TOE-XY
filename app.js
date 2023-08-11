import { gameBoard } from './board.js'
import { player1, player2 } from './players.js'

gameBoard()

document.addEventListener('click', function (e) {
  const clickedId = e.target.id

  const clickedElement = document.getElementById(clickedId)
  if(!e.target.dataset.taken) {
    if(clickedId && clickedElement) {
      player2(clickedElement)
    }
  }
})
