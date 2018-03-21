/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* globals $ */

var View = __webpack_require__(2);

$(function () {
  var $easel = $("#easel");
  new View($easel);
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* jshint esversion: 6 */

const Snake = __webpack_require__(3);

class View {
  constructor($el) {
    this.$el = $el;
    this.snake = new Snake();
    this.setup();
  }

  setup(){
    this.constructGrid();
    setInterval(this.render.bind(this), 500);
    this.render();

    this.setKeyHandlers();
  }

  setKeyHandlers() {
    $('body').keydown((e) => {
      if (e.keyCode === 37) {
        this.snake.direction = 4;
      }

      if (e.keyCode === 38) {
        this.snake.direction = 1;
      }

      if (e.keyCode === 39) {
        this.snake.direction = 2;

      }

      if (e.keyCode === 40) {
        this.snake.direction = 3;
      }


    });
  }

  constructGrid(){
    this.$uL = $('<ul>');
    this.$el.append(this.$uL);
    for (let i = 0; i < 10; i+=1) {
      for (let j = 0; j < 10; j+=1) {
        const $newEl = $('<li></li>');
        if (j < 5 && i === 0) {
          $newEl.css('background-color', 'black');
        }
        this.$uL.append($newEl);
      }
    }
  }

  render() {
    this.snake._move();
    const liNum = this.snake.prevPos[0] * 10 + this.snake.prevPos[1];
    this.$uL.children().eq(liNum).css('background-color', 'white');
    const length = this.snake.body.length - 1;
    const nextPos = this.snake.body[length][0] * 10 + this.snake.body[length][1];
    this.$uL.children().eq(nextPos).css('background-color', 'black');
  }
}

module.exports = View;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Snake {
  constructor() {
    this.length = 5;
    this.direction = 2;
    this.body = [];
    for (let i = 0; i < 5; i+=1) {
      this.body.push([0, i]);
    }
  }

  _move() {
    this.prevPos = this.body[0];
    this.body = this.body.slice(1);
    const prev = this.body[this.body.length - 1];
    const newPos = [prev[0], prev[1]];
    switch(this.direction) {
      case 1:
        newPos[0] -= 1;
        break;
      case 2:
        newPos[1] += 1;
        break;
      case 3:
        newPos[0] += 1;
        break;
      case 4:
        newPos[1] -= 1;
        break;
    }
    this.body.push(newPos);
  }
}

module.exports = Snake;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map