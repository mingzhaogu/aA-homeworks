/* jshint esversion: 6 */

const Snake = require('./snake.js');

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
