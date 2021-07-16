let player;
let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let wordClassifier;

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
  createCanvas(2000, 800);
  player = new Player();
  wordClassifier.classify(heardWord);
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
      noFill();
      stroke("red");
      console.log("GAME OVER!!");
      noLoop();
    }
  }
  player.show();
  player.move();
}
