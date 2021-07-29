let player;
let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let wordClassifier;
let button;

function preload() {
  bgImage = loadImage("bg.png");
  playerImage = loadImage("player.png");
  obstacleImage = loadImage("obstacle.png");
  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function restartGame() {
  obstacles = [];
  loop();
  redraw();
  button.remove();
}

function heardWord(errors, results) {
  let word = results[0].label;
  if (word === "up") {
    player.jump();
  }
  console.log(results[0].label, results[0].confidence);
}

function keyPressed() {
  if (key === " ");
  player.jump();
  console.log("up");
}

function mousePressed() {
  obstacles = [];
  loop();
  redraw();
}

function touchStarted(event) {
  player.jump();
}

function draw() {
  if (random(1) < 0.005) {
    obstacles.push(new Obstacle());
  }
  background(bgImage);

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs) === true) {
      fill(0);
      stroke("red");
      textSize(70);
      text("GAME OVER!!", width / 2, height / 2 - 50);
      noLoop();
      button = createButton("Restart");
      button.position(width / 2, height / 2);
      button.mousePressed(restartGame);
    }
  }
  player.show();
  player.move();
}
