import { gameBoard } from './board.js'
import { player1, player2 } from './players.js'

const players = [{
  name: player1,
  token: circle
}, {
  name: player2,
  token: cross
}]

function playRound() {
  let activePlayer = players[0]

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[0] : players[1]
  }
}

document.addEventListener('click', function (e) {
  const clickedId = e.target.id

  const clickedElement = document.getElementById(clickedId)
  if(!e.target.dataset.taken) {
    if(clickedId && clickedElement) {
      
    }
  }
})
