class Coin {
  constructor() {
    this.h = 50;
    this.w = 37;
    this.x = width;
    this.y = height - (this.h + 190);
  }
  
  move() {
    this.x -= 6;
  }
  
  show() {
   image(coinImg, this.x, this.y, this.w, this.h);
  }
  
  hideCoin() {
    //coinSong.play();
    this.w = 0.1;
    this.h = 0.1;
  }
}
