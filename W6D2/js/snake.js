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
