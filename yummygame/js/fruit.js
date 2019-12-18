// ------------
// Mouse events
// ------------

button.addEventListener("mouseenter", enterButton);
button.addEventListener("mouseleave", leaveButton);
var mouseIsHovering = false;

function enterButton() {
  mouthOpen.play();
  mouseIsHovering = true;
}
function leaveButton() {
  mouthOpen.reverse();
  mouseIsHovering = false;
}

// -------------
// Fruit cursor
// -------------

window.addEventListener("mousemove", moveFruit);

const fruit = document.querySelector(".fruit");
var fruitType = document.querySelector(".fruit-type");

function moveFruit(e) {
  const fruitX = e.clientX;
  const fruitY = e.clientY;
  fruit.style.transform = `translate(${fruitX}px, ${fruitY}px)`;
}

// ---------
// Eat fruit
// ---------

button.addEventListener("click", eatFruit);

function Fruit(path, width, name, className, sound, response) {
  this.path = path;
  this.width = width;
  this.name = name;
  this.className = className;
  this.sound = sound;
  this.response = response;
}

var carrot = new Fruit(
  "src/carrot.svg",
  "240px",
  "carrot",
  "carrot",
  "src/carrot-bite.mp3",
  "crunchy!"
);
var apple = new Fruit(
  "src/apple.svg",
  "180px",
  "apple",
  "apple",
  "src/apple-bite.mp3",
  "tasty!"
);
var melon = new Fruit(
  "src/melon.svg",
  "400px",
  "melon",
  "melon",
  "src/grapes-bite.mp3",
  "juicy!"
);
var banana = new Fruit(
  "src/banana.svg",
  "240px",
  "banana",
  "banana",
  "src/banana-bite.mp3",
  "sweet!"
);
var pear = new Fruit(
  "src/pear.svg",
  "130px",
  "pear",
  "pear",
  "src/pear-bite.mp3",
  "tasty!"
);
var grapes = new Fruit(
  "src/grapes.svg",
  "200px",
  "grapes",
  "grapes",
  "src/grapes-bite.mp3",
  "juicy!"
);
var potato = new Fruit(
  "src/potato.svg",
  "200px",
  "potato",
  "potato",
  "src/carrot-bite.mp3",
  "crunchy!"
);
var pineapple = new Fruit(
  "src/pineapple.svg",
  "160px",
  "pineapple",
  "pineapple",
  "src/grapes-bite.mp3",
  "juicy!"
);
// var pen = new Fruit("src/pen.svg", "130px", "pen", ".pen", "src/cartoon-bite.mp3", "not so great...");

var fruits = [carrot, apple, melon, banana, pear, grapes, potato, pineapple];

var delayEat = 300;
var delayNext = 1000;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var currentFruit = getRandomInt(fruits.length);
// var currentFruit = 0;
setFruit(currentFruit);
var eatSound;

function setFruit(fruitIndex) {
  var newFruit = fruits[fruitIndex];
  fruit.src = newFruit.path;
  fruit.style.width = newFruit.width;
  fruitType.textContent = newFruit.name;
  fruitType.classList = "fruit-type " + newFruit.className;
  eatSound = new sound(newFruit.sound);
}
function eatFruit(e) {
  mouthOpen.reverse();

  setTimeout(function() {
    var activeFruit = fruits[currentFruit];
    fruit.src = "";
    fruitType.textContent = activeFruit.response;
    eatSound.play();

    setTimeout(function() {
      currentFruit = getRandomInt(fruits.length);
      // currentFruit++;
      setFruit(currentFruit);
      if (mouseIsHovering) {
        mouthOpen.play();
      }
    }, delayNext);
  }, delayEat);
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  };
  this.stop = function() {
    this.sound.pause();
  };
}
