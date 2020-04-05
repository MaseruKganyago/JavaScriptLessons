const random = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

class Shape {
  constructor(x, y, velX, velY, exists, context, width, height) {
    this._x = x;
    this._y = y;
    this._velX = velX;
    this._velY = velY;
    this._exists = exists;
    this._ctx = context;
    this._width = width;
    this._height = height;
  }
}

export class Ball extends Shape {
  constructor(x, y, velX, velY, exists, context, color, size, width, height){
    super(x, y, velX, velY, exists, context, width, height);
    
    this._color = color;
    this._size = size;
  }

  draw() {
  this._ctx.beginPath();
  this._ctx.fillStyle = this._color;
  this._ctx.arc(this._x, this._y, this._size, 0, 2 * Math.PI);
  this._ctx.fill();
  }

  update() {
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
  }

  collisionDetect(array) {
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
}

export class EvilCircle extends Shape {
  constructor(x, y, exists, context,width, height) {
    super(x, y, 20, 20, exists, context, width, height);

    this._color = 'white';
    this._size = 10;
  }

  draw() {
    this._ctx.beginPath();
    this._ctx.strokeStyle = this._color;
    this._ctx.arc(this._x, this._y, this._size, 0, 2 * Math.PI);
    this._ctx.stroke();
  }

  checkBounds() {
    if (this._x + this._size >= this._width) {
      this._x = -this._x;
    }
  
    if (this._x - this._size <= 0) {
      this._x = -this._x;
    }
  
    if (this._y + this._size >= this._height) {
      this._y = -this._y;
    }
  
    if (this._y - this._size <= 0) {
      this._y = -this._y;
    }
  }

  setControls() {
    let holder = this
    window.onkeydown = (e) => {
      if(e.key === 'a') {
        holder._x -= holder._velX;
      } else if (e.key === 'd') {
        holder._x += holder._velX;
      } else if(e.key === 'w') {
        holder._y -= holder._velY;
      } else if(e.key === 's') {
        holder._y += holder._velY;
      }
    }
  }
  
  vanisher(array) {
    for(let m = 0; m < array.length; m++) {
      if(array[m]._exists === true) {
        const dx = this._x - array[m]._x;
        const dy = this._y - array[m]._y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if(distance < this._size + array[m]._size) {
          console.log('check')
          array[m].exists = false;
          array.splice(m, 1);
        }
      }
    }

    return array.length;
  }
}