/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 549:
/***/ (() => {

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
    document.addEventListener('click', event => {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/img/flow.png
/* harmony default export */ const flow = (__webpack_require__.p + "img/flow.png");
;// CONCATENATED MODULE: ./src/img/goblin.png
/* harmony default export */ const goblin = (__webpack_require__.p + "img/goblin.png");
// EXTERNAL MODULE: ./src/js/app.js
var app = __webpack_require__(549);
;// CONCATENATED MODULE: ./src/index.js




})();

/******/ })()
;