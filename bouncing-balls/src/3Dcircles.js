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



export default Ball;
