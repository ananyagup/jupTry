let namesArr = [];
let scoresArr = [];
let userName;
let nCoin;
let totalCoin;
let newPostKey;
let imgIcon;
let charList;
let coins;
let coinsWon = -5;
let charCost = 0;
let charSplit;
let getCoins;
let getChar;

function setup() {
  //localStorage.removeItem("coins");
  canvas = createCanvas(windowWidth, 50);
  canvas.position(0,0);
  imgIcon = loadImage('coinIcon.png');
  if (localStorage.getItem("coins") == null) {
    console.log('nothing yet');
    localStorage.setItem("coins", "0");
    localStorage.setItem("characters", "pig");
  }
  getCoins = Number(localStorage.getItem("coins"));
  getChar = localStorage.getItem("characters");
  console.log('both gets', getCoins, getChar);
}

function addChar(chosenChar) {
  if (chosenChar == "pusheen") {
    charCost = 50;
  } else if (chosenChar == "corgi") {
    charCost = 50;
  } else if (chosenChar == "ghost") {
    charCost = 50;
  } else if (chosenChar == "fox") {
    charCost = 50;
  } else if (chosenChar == "whale") {
    charCost = 50;
  } else if (chosenChar == "unicorn") {
    charCost = 50;
  } else if (chosenChar == "elephant") {
    charCost = 50;
  } else if (chosenChar == "octopus") {
    charCost = 50;
  } else if (chosenChar == "duck") {
    charCost = 50;
  } else if (chosenChar == "owl") {
    charCost = 50;
  } else if (chosenChar == "chicken") {
    charCost = 50;
  }
  
  if (getCoins >= charCost) {
    getChar = getChar + ',' + chosenChar;
    console.log('getchar', getChar);
    localStorage.setItem("characters", getChar);
    getCoins -= charCost;
    localStorage.setItem("coins", getCoins);
    location.reload();
  } else {
    console.log('not enough coins');
  }
}

function statusCheck(char) {
  setTimeout(function(){
    let imgSrc = document.getElementById(char+'_img').src.split("_")[0];
    if (getChar.includes(char)) {
      console.log('is in inventory');
      document.getElementById(char+'_img').src = imgSrc + "_start.jpg";
      //document.getElementById(char+'_btn').disabled = true;
      document.getElementById(char+'_btn').style.visibility = "hidden";
  }}, 3000);
}

function draw() {
  background('lightblue');
  textSize(32);
  fill(0, 102, 153);
  text(getCoins, windowWidth/2, 32);
  image(imgIcon, windowWidth/2 - 50, 0);
  //if char in lis then char is not transperant and the button is invisible and disabled
}

function charClick(char) {
  //if char in charlis then do. otherwise no.
  if (getChar.includes(char)) {
    console.log('is in playing');
    window.location.href= 'play.html';
    console.log('char', char);
    //console.log('coin', totalCoin);
    sessionStorage.setItem("character", char);
  } else {
    console.log("need to add to inventory", char);
    addChar(char)
  }
}

//function of on load to check which characters are bought and which are not. The bought ones are not transperant while others are. The not bought ones' images don't do anything on click.

//function buyChar(char) {
  //do on load if character is in the cookie then it is not transperant
  //do buy character that adds character to the list and makes it not transperant
  //do check when choosing to play if the character is in the list
//}
