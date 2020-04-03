
const random = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

function Ball(x, y, velX, velY, color, size, ctx, width, height) {
  this._x = x;
  this._y = y;
  this._velX = velX;
  this._velY = velY;
  this._color = color;
  this._size = size;
  this._ctx = ctx;
  this._width = width;
  this._height = height;
}

Ball.prototype.draw = function() {
  this._ctx.beginPath();
  this._ctx.fillStyle = this._color;
  this._ctx.arc(this._x, this._y, this._size, 0, 2 * Math.PI);
  this._ctx.fill();
};

Ball.prototype.update = function() {
  if (this._x + this._size >= this._width) {
    this._velX = -this._velX;
  }

  if (this._x - this._size <= 0) {
    this._velX = -this._velX;
  }

  if (this._y + this._size >= this._height) {
    this._velY = -this._velY;
  }

  if (this._y - this._size <= 0) {
    this._velY = -this._velY;
  }

  this._x += this._velX;
  this._y += this._velY;
};

Ball.prototype.collisionDetect = function(array) {
  for (let j = 0; j < array.length; j++) {
    if (this !== array[j]) {
      const dx = this._x - array[j]._x;
      const dy = this._y - array[j]._y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this._size + array[j]._size) {

        array[j]._color = this._color = 'rgb(' + random(0, 255)  + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
    }
  }
}
}


export default Ball;
