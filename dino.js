class Dinosaur {
  constructor() {
    this.w = dinoImg.width;
    this.h = dinoImg.height;
    this.r = this.h;
    this.x = this.r;
    this.y = height - this.r -100;
    this.vy = 0;
    this.gravity = 0.6;
  }

  jump() {
    this.elev = height - this.y - this.r - 100;
    if (this.elev == 0) {
      this.vy = -18;
    }
    //jumpSong.play();
  }
  
  hits(obs) {
    return collideRectRect(this.x,this.y,this.w,this.h,obs.x,obs.y,obs.w,obs.h);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r - 100);
  }

  show() {
    image(dinoImg, this.x, this.y, this.w, this.h);
  }
}
