class Obstacle {
 
  constructor() {
    this.h = tImg.height/2;
    this.w = tImg.width/2;
    this.x = width;
    this.y = height - this.h - 100;
  }
  
  move() {
    this.x -= 6
  }
  
  show() {
    image(tImg, this.x, this.y, this.w, this.h)
  }
}