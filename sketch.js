let text = " ";
let sample =
  "";
sample = sample.toLowerCase();
console.log(sample);
let myArray = sample.split(" ");




var keyIm;
var yHeight = 0;

document.onkeypress = function (e) {
  e = e || window.event;



  //text += String.fromCharCode(e.keyCode);
  for (var i = 0; i < myArray.length; i++) {
    if (text.includes(myArray[i])) {

      myArray.splice(i, 1);
      text = "";
    }
  }
  let pressedKey = String.fromCharCode(e.keyCode)
  console.log(pressedKey);
  let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
      return
    } else {
      for (i = 97; i <= 122; i++) {
        document.getElementById(String.fromCharCode(i)).style.backgroundColor = "white";
        document.getElementById(String.fromCharCode(i)).style.fontSize = "2rem";
        document.getElementById(String.fromCharCode(i)).style.padding = "0.6em 1em";
      }
      document.getElementById(pressedKey).style.backgroundColor = "green";
      document.getElementById(pressedKey).style.fontSize = "2.5rem";
      document.getElementById(pressedKey).style.padding = "0.3em 0.7em";
    }



  keyIm = keyImage(e.keyCode);
  boxes.push(
    new Box(
      window.width/2+(Math.random()*10),
      12 * yHeight + 36,
      12,
      12,
      loadImage(keyIm)
    )
  );

};


var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var plinkos = [];
let cols = 25,
rows = 5,
particleSize = 3,
plinkoSize = 9;
width = window.screen.width;
const spacing = width / cols;

function setup() {
  canvas.width = window.screen.width;
  canvas.height = window.screen.height /2;
  createCanvas(canvas.width, canvas.height);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  };
  fill(100);
  //ground = Bodies.rectangle(0, canvas.innerHeight,0,canvas.width);
  //var box1 = Bodies.rectangle(100,100,50,50, options);
  var ground = Bodies.rectangle(0, canvas.height / 2, canvas.width * 2, 100, {
    isStatic: true
  });

  for (let j = 0; j < rows; j ++) {
      for (let i = 0; i < cols; i ++) {
        let x = i * spacing;
        if (j % 2 == 0) {
          x += spacing / 2;
        }
        const y = spacing + j * spacing;
        const p = new Plinko(x, y, plinkoSize);
        plinkos.push(p);
      }
    }

    for (let j = 0; j < rows*2; j ++) {
        for (let i = 0; i < cols/4; i ++) {
          let x = i * spacing /2;

          const y = spacing + j*6 + canvas.height/4;
          const p = new Plinko(x *2 + canvas.width/5, y + canvas.height/15, plinkoSize);
          plinkos.push(p);
        }
      }
  World.add(world, ground);
}

function Plinko(x,y,r) {
  const options = {
    isStatic : true,
    density : 1,
    restitution : 1,
    friction : 0
  }
  this.color = random(80,175);
  this.body = Bodies.circle(x,y,r, options);
  this.r = r;
  World.add(world, this.body);
}

Plinko.prototype.show = function() {
  fill(this.color);
  // stroke(255);
  noStroke();
  const {x, y } = this.body.position;
  push();
  translate(x, y);
  ellipse(0,0, this.r * 2);
  pop();
}


function Box(x, y, w, h, keyImage) {
  var options = {
    friction: 0.3,
    restitution: 0.6
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  this.image = keyImage;

  World.add(world, this.body);

  this.show = function () {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);

    pop();
  };
}

function keyImage(code) {
  var url;
  switch (code) {
    case 97:
      return "https://i.imgur.com/eljKHeN.png";
      break;
    case 98:
      return "https://i.imgur.com/xiQ1lLM.png";
      break;
    case 99:
      return "https://i.imgur.com/LnX3tMD.png";
      break;
    case 100:
      return "https://i.imgur.com/iqtndXO.png";
      break;
    case 101:
      return "https://i.imgur.com/KEiEyn2.png";
      break;
    case 102:
      return "https://i.imgur.com/XzkXgxf.png";
      break;
    case 103:
      return "https://i.imgur.com/wDOZbr1.png";
      break;
    case 104:
      return "https://i.imgur.com/VMsmA1d.png";
      break;
    case 105:
      return "https://i.imgur.com/4NQm6Bi.png";
      break;
    case 106:
      return "https://i.imgur.com/fLyafBQ.png";
      break;
    case 107:
      return "https://i.imgur.com/towSnKH.png";
      break;
    case 108:
      return "https://i.imgur.com/H99XdP6.png";
      break;
    case 109:
      return "https://i.imgur.com/dmITnOK.png";
      break;
    case 110:
      return "https://i.imgur.com/SOMQGmk.png";
      break;
    case 111:
      return "https://i.imgur.com/3CpfYA0.png";
      break;
    case 112:
      return "https://i.imgur.com/3pfZ3cA.png";
      break;
    case 113:
      return "https://i.imgur.com/ur59cdE.png";
      break;
    case 114:
      return "https://i.imgur.com/5mQf12a.png";
      break;
    case 115:
      return "https://i.imgur.com/6uKSTfy.png";
      break;
    case 116:
      return "https://i.imgur.com/3wweLF4.png";
      break;
    case 117:
      return "https://i.imgur.com/U6LZIkt.png";
      break;
    case 118:
      return "https://i.imgur.com/NgcuaFW.png";
      break;
    case 119:
      return "https://i.imgur.com/Tvvp37W.png";
      break;
    case 120:
      return "https://i.imgur.com/P35aLSN.png";
      break;
    case 121:
      return "https://i.imgur.com/dozTCG1.png";
      break;
    case 122:
      return "https://i.imgur.com/ep7Ba2e.png";
      break;
    case 8:
      return "https://i.imgur.com/FOEr5YI.png";
      break;
  }
}

function draw() {
  background(255);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }
  noStroke(255);
  fill(255);
  rectMode(CENTER);
}
