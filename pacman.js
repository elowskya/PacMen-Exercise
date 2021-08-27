let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale = 300) {
  return {
    x: Math.random().toFixed(2) * scale,
    y: Math.random().toFixed(2) * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(); 
  let position = setToRandom();

  // Add image to div id = game
  let game = document.getElementById('game');
  console.log(window.innerHeight, window.innerWidth);
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position.x + 'px';
  newimg.style.bottom = position.y + 'px';

  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.bottom = item.position.y;
  });
  setTimeout(update, 20);
}

// TODO: detect collision with all walls and make pacman bounce
function checkCollisions(item) {
  const checkRightEdge = window.innerWidth - 100; 
  const checkTopEdge = window.innerHeight - 105; 
  const checkLeftEdge = 0 + 'px';
  const checkBottomEdge = 0 + 'px';

  
 
 // let flag = true; //start program to automatically run from left to right
//   if (flag) {
//     velocity += 100;
//     ball.style.left = velocity + "px"; //string data type
//     if (velocity >= window.innerWidth - 200) {
//         flag = false;
//     }}

// else {
//     ball.style.left = velocity + "px";
//     velocity -= 20;
//     if (ball.style.left === "0px") {
//         flag = true;
//     }
// }
  
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
