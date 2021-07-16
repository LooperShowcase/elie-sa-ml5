class Player {
  constructor() {
    this.size = 198;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1;
  }

  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -21;
    }
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 100, height - this.size);
  }

  show() {
    image(playerImage, this.x, this.y, this.size, this.size);
  }

  collided(obstacleToCheck) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 100,
      this.size - 10,
      obstacleToCheck.x,
      obstacleToCheck.y,
      obstacleToCheck.size - 50,
      obstacleToCheck.size - 50
    );
    return isColliding;
  }
}
