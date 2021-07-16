class Obstacle {
  constructor() {
    this.size = 100;
    this.x = width;
    this.y = height - this.size;
    this.velocityX = -10;
  }
  move() {
    this.x += this.velocityX;
  }
  show() {
    image(obstacleImage, this.x, this.y, this.size, this.size);
  }
}
