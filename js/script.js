let cells = document.querySelectorAll('.td')
let winner = false

cells.forEach(function (cell) {
    cell.addEventListener('click', userinput)
});

function userinput() {
    if (!this.classList.contains('free') || winner) {
        return false
    }
    this.textContent = 'X'
    this.classList.remove('free')
    check()
    if (!winner) {
        computerinput()
    }
}

function computerinput() {
    let freecells = document.querySelectorAll('.free')
    let randomnum = Math.floor((Math.random()) * freecells.length)
    freecells[randomnum].textContent = 'O'
    check()
    freecells[randomnum].classList.remove('free')
}

function win(sign, ...cells) {
    winner = true
    cells.forEach(cell => {

        cell.style.color = 'blueviolet'
    })
    setTimeout(function () {
        alert('Winner is: ' + sign)
    }, 0)
    setTimeout(function (i) {
        if (sign === 'X') {
            i = 1
            let you = document.querySelector('#yourWins')
            you.textContent = 'Wins:' + i++
        }
        if (sign === 'O') {
            i = 1
            let you = document.querySelector('#compWins')
            you.textContent = 'Wins:' + i++
        }
    }, 1000)
}

function nextmovecheck() {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    combinations.forEach(combo => {
        if (cells[combo[0]].textContent === cells[combo[1]].textContent ||
            cells[combo[0]].textContent === cells[combo[2]].textContent ||
            cells[combo[1]].textContent === cells[combo[2]].textContent) {
            console.log('mec lopta')
            let nextcells = document.querySelectorAll('.free')
            console.log(nextcells)
            console.log(nextcells.length)
            let randomnum = Math.floor((Math.random()) * freecells.length)
            nextcells[randomnum].textContent = 'O'

            nextcells[randomnum].classList.remove('free')
        }
    })
}

function check() {

    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    combinations.forEach(combo => {
        if (cells[combo[0]].textContent === cells[combo[1]].textContent &&
            cells[combo[0]].textContent === cells[combo[2]].textContent) {
            win(cells[combo[0]].textContent, cells[combo[0]], cells[combo[1]], cells[combo[2]])
        }
    })
}

let resetGame = document.querySelector('#reset')
resetGame.addEventListener('click', () => {
    location.reload()
})