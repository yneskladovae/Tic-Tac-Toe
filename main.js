'use strict'

let res = document.createElement('div');
res.classList.add('res');
document.body.append(res);

const game = document.createElement('div');
game.id = "game";
document.body.append(game);

for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.classList.add('block');
    game.append(div);
}

let step = 0;

const arr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

game.addEventListener('click', e =>{ 
    if (e.target.innerText === '') {
        step % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "O";
        step++;
    }
    checkWinner();
})

function checkWinner() {
    const blocks = document.getElementsByClassName('block');

    for (let i = 0; i < arr.length; i++) {
        if (blocks[arr[i][0]].innerText === "X" && blocks[arr[i][1]].innerText === "X" && blocks[arr[i][2]].innerText === "X") {
            res.innerText = 'Победили крестики';
            setTimeout(() => location.reload(), 3000)
            return;
        } else if (blocks[arr[i][0]].innerText === "O" && blocks[arr[i][1]].innerText === "O" && blocks[arr[i][2]].innerText === "O") {
            res.innerText = 'Победили нолики';
            setTimeout(() => location.reload(), 3000)
            return;
        }
    }
}