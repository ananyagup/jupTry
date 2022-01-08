let c = "pink";
let colorArr = ["pink", "powderblue", "lavender"]

function setup() {
  //let cnv = createCanvas(850, 600);
  //cnv.position(0.24*windowWidth, 0.21*windowHeight);
  //cnv.position(295, 125)
  let cnv = createCanvas(windowWidth-140, windowHeight-140);
  cnv.position(70, 70)
  background('powderblue');
}

function mouseMoved() {
  fill(c);
  ellipse(mouseX, mouseY, 50);
}

function mouseClicked() {
  c = random(colorArr)
}
