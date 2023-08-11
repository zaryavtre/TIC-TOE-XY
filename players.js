function player1(clicked) {
    const circle = document.createElement('div')
    circle.classList.add('circle-player1')
    circle.dataset.taken = 'place'

    clicked.appendChild(circle)
  }

function player2(clicked) {
    const cross = document.createElement('div')
    cross.classList.add('cross-player2')
    cross.dataset.taken = 'place'

    clicked.appendChild(cross)
  }

  export { player1, player2 }