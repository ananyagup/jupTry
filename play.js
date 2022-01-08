let obstacles;
let randint;
let score;
let lost;
let next;
let spread;
let video;
let poseNet;
let pose;
let backCol;
let charName;
let col;
let pageCol;
let mode = false;
var resBut = document.getElementById("resetDIV");
let song;
let coinImg;
let coinsArr;
let coinScore;
let coinRandint;
let coinNext;
let coinsClash;
let coinCount;
let newPostKey;
let bg_idea;
var x1 = 0;
var x2;
var scrollSpeed = 6;
let totalCoin;
let jumpSong;
let coinSong;
let lostSong;

function preload() {
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  coinImg = loadImage('coinIcon.png'); 
  tImg = loadImage('cactus.png'); 
  //jumpSong = loadSound('jump.mp3');
  //coinSong = loadSound('coin.m4a');
  //lostSong = loadSound('lost.mp3');
  //dinoImg = loadImage('rabbit_game-removebg-preview.png'); 
  let charImgLoad = sessionStorage.getItem("character");
  if (charImgLoad == "pig") {
    console.log('pig pog pig')
    dinoImg = loadImage('rabbit_game-removebg-preview.png');
    bg_idea = loadImage("bg_idea.jpg");
  } else if (charImgLoad == "pusheen") {
    dinoImg = loadImage('char_one.png');
    bg_idea = loadImage("bg_idea2.jpg");
  } else if (charImgLoad == "corgi") {
    dinoImg = loadImage('char_two.png');
    bg_idea = loadImage("bg_idea3.jpg");
  } else if (charImgLoad == "ghost") {
    dinoImg = loadImage('char_three.png');
    bg_idea = loadImage("bg_idea4.jpg");
  } else if (charImgLoad == "fox") {
    dinoImg = loadImage('char_four.png');
    bg_idea = loadImage("bg_idea5.jpg");
  } else if (charImgLoad == "whale") {
    dinoImg = loadImage('char_five.png');
    bg_idea = loadImage("bg_idea6.jpg");
  } else if (charImgLoad == "unicorn") {
    dinoImg = loadImage('char_six.png');
    bg_idea = loadImage("bg_idea7.jpg");
  } else if (charImgLoad == "elephant") {
    dinoImg = loadImage('char_seven.png');
    bg_idea = loadImage("bg_idea8.jpg");
  } else if (charImgLoad == "octopus") {
    dinoImg = loadImage('char_eight.png');
    bg_idea = loadImage("bg_idea9.png");
  } else if (charImgLoad == "duck") {
    dinoImg = loadImage('char_nine.png');
    bg_idea = loadImage("bg_idea10.jpg");
  } else if (charImgLoad == "owl") {
    dinoImg = loadImage('char_ten.png');
    bg_idea = loadImage("bg_idea11.png");
  } else if (charImgLoad == "chicken") {
    dinoImg = loadImage('char_eleven.png');
    bg_idea = loadImage("bg_idea12.jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  resetSketch();
  poseNet.on('pose', gotPoses);
  x2 = width;
  totalCoin = Number(localStorage.getItem("coins"));
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose.keypoints;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function keyPressed() {
  if (key == ' ') {
    dinosaur.jump();
    if (lost) {
      noLoop();
      resBut.style.display= "block";
    }
  }
}

function resetSketch() {
  console.log("Restarting game")
  score = 0;
  coinScore = 0;
  lost = false;
  obstacles = [];
  coinsArr = [];
  next = 0;
  coinNext = 0;
  dinosaur = new Dinosaur();
  new Obstacle();
  new Coin();
  randint = int(random(50, 150));
  coinRandint = int(random(50, 150));
  coinsClash = [];
  coinCount = 0;
  loop();
  resBut.style.display= "none";
}

function draw() {
  image(bg_idea, x1, 0, width, height);
  image(bg_idea, x2, 0, width, height);
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  let character = sessionStorage.getItem("character");
  console.log(character);
  if (character == "pig") {
    console.log("char chosen pig");
    col = '#FFB6C1';
    document.body.style.backgroundColor = "#F5DEB3";
  } else if (character == "pusheen") {
    console.log("char chosen pusheen")
    col = '#F5D2D3';
    document.body.style.backgroundColor = "#fbd2d7";
  } else if (character == "corgi") {
    console.log("char chosen corgi")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "ghost") {
    console.log("char chosen ghost")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "fox") {
    console.log("char chosen fox")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "whale") {
    console.log("char chosen whale")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "unicorn") {
    console.log("char chosen unicorn")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "elephant") {
    console.log("char chosen elephant")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "octopus") {
    console.log("char chosen octopus")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "duck") {
    console.log("char chosen duck")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "owl") {
    console.log("char chosen owl")
    col = '#DCDCDC';
    document.body.style.backgroundColor = "#BC8F8F";
  } else if (character == "chicken") {
    console.log("char chosen chicken")
    col = '#DCDCDC'; 
    document.body.style.backgroundColor = "#BC8F8F";
  }
  
  coinNext += 1;
  
  if (coinNext == coinRandint) {
    coinsArr.push(new Coin());
    //console.log(coinsArr);
    coinNext = 0;
    coinScore += 1;
    coinRandint = int(random(40, width/5));
  }
    
  for (let c of coinsArr) {
    if (c.x < 0) {
      if (coinsArr.length > 3) {
        coinsArr.shift();
      }
    }
    c.move();
    c.show();
    if (dinosaur.hits(c)) {
      coinsClash.push(coinScore);
      c.hideCoin();
    }
  }
  
  text(score, 5, 24);
  
  next += 1
  if (next == randint) {
    obstacles.push(new Obstacle())
    score += 1;
    next = 0;
    //spread = slider.value()
    randint = int(random(40, width/5));
  }
  
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift();
      }
    }
    o.move();
    o.show();
    if (dinosaur.hits(o)) {
      console.log("Game Over!")
      lost = true;
      noLoop();
      resBut.style.display= "block";
      for (var coi= 0; coi < coinsClash.length; coi++) {
        if (coi == 0) {
          coinCount = 1;
        } else {
          if (coinsClash[coi] == coinsClash[coi-1]) {
            console.log('repeat');
          } else{
            coinCount+= 1;
          }
        }
      }
      totalCoin = Number(localStorage.getItem("coins"));
      console.log('done', coinCount);
      localStorage.setItem("coins", coinCount+ totalCoin);
    }
  }

  dinosaur.show();
  dinosaur.move();
  if (pose) {
    let r_wrist = pose[10].position;
    let l_wrist = pose[9].position;
    let r_shoulder = pose[6].position
    let l_shoulder = pose[5].position;
    fill(col);
    //#CCE1F2
    ellipse(r_shoulder.x, r_shoulder.y, 20);
    fill(col);
    ellipse(l_shoulder.x, l_shoulder.y, 20);
    fill(col);
    ellipse(r_wrist.x, r_wrist.y, 20);
    fill(col);
    ellipse(l_wrist.x, l_wrist.y, 20);
    //console.log(r_wrist.y, r_shoulder.y);
    //console.log(l_wrist.y, l_shoulder.y);
    if (r_wrist.y < r_shoulder.y) {
      if (l_wrist.y < l_shoulder.y) {
        console.log('jumped')
        dinosaur.jump();
        if (lost) {
          //resetSketch();
          //lostSong.play();
          noLoop();
          resBut.style.display= "block";
        }
      }
    }
  }
}
