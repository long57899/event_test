const points = document.getElementById('points');
const godlins = document.getElementById('godlins');

class GameBoard {
    constructor(boardSize) {
        this.boardSize = boardSize;
    }
    
    createBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < this.boardSize; i += 1) {
        const itemBoard = document.createElement('div');
        itemBoard.className = 'hole';
        board.appendChild(itemBoard);
    }
    
    this.randomImg();
    }
    
    randomImg() {
    let appGoblin = -1;
    let goodClick = 0;
    let last;
    const hole = document.getElementsByClassName('hole');
    const img = '<img src="./img/goblin.png">';
    
    const Intervals = setInterval(() => {
        let index = Math.floor(Math.random() * (this.boardSize + 1));
  
        if (index === last) {
            index += 1;
            if (index > this.boardSize - 1) {
                index = 0;
            }
        }
        hole.item(last).innerHTML = ' ';
        hole.item(index).innerHTML = img;
                
        last = index;
        
        appGoblin++;
        
        godlins.innerText = `Пропущеных гоблинов: ${appGoblin}`;
        
        if (appGoblin === 5) {
            alert(`Игра окончена, пропущеных гоблинов ${appGoblin}`);
            clearInterval(Intervals);
            hole.item(last).innerHTML = ' ';
        }
    }, 1000);
    
    document.addEventListener('click', (event) => {
        const eventTarget = event.target;
        if (eventTarget.closest('img')) {
            goodClick++;
            appGoblin--;
            points.innerText = `Баллов: ${goodClick}`;
            hole.item(last).innerHTML = ' ';
        }
    });
    }
}

const newBoard = new GameBoard(4 * 4);
newBoard.createBoard();
