let question = "Are cats cute?";
let correctAnswer = "A";
let catImage, diedCatImage;
let showImage = false;
let selectedAnswer = '';

function preload() {
  catImage = loadImage('cat2.png');
  diedCatImage = loadImage('deadcat.jpg');
}

function setup() {
  createCanvas(400, 300);
  textAlign(CENTER, CENTER);

  let buttonA = createButton('Yes');
  buttonA.position(100, 250);
  buttonA.mousePressed(() => checkAnswer('A'));

  let buttonB = createButton('No');
  buttonB.position(300, 250);
  buttonB.mousePressed(() => checkAnswer('B'));
}

function draw() {
  background(220);
  textSize(20);
  text(question, width / 2, 50);

  if (showImage) {
    if (selectedAnswer === correctAnswer) {
      image(catImage, width / 2 - 75, 100, 150, 150);
    } else {
      image(diedCatImage, width / 2 - 75, 100, 150, 150);
      text("UNFORTUNATELY YOUR CAT DIED", width/2, height/2);
    }
  }
}

function checkAnswer(answer) {
  selectedAnswer = answer;
  showImage = true;
}