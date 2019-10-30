var slider;
var slider2;
var angle = 0;

// var words = ["BRUFOLI", "BIRRA CALDA", "VINO SGASATO", "LIBRO DI CHIMICA", "CAPPELLO DA PESCATORE","UN CALZINO","VOLLEY BALL"];
var words = ["BRUFOLI", "BIRRA CALDA", "VINO SGASATO", "LIBRO DI CHIMICA", "CAPPELLO DA PESCATORE","UN CALZINO","VOLLEY BALL"];
var index = 0;

var button;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  slider = createSlider(0, 255, 20);
  slider.position((windowWidth / 2),(height / 2) + 200);

  slider2 = createSlider(0, words.length, 20);
  slider2.position((windowWidth / 2),(height / 2) + 250);

  button = createButton("YOUR CHOICE");
  button.size(100, 20);
  button.position((windowWidth / 2) + 10,(height / 2) + 300);
  button.mousePressed(clickButton);
}

function draw() {

  fill("red");
  textSize(32);
  text(words[index], 12, 200);


   var x = map(sin(angle), -1, 1, 0, 255);
   slider.value(x);

   background(slider.value());
   angle += 0.03;


   index = round(random(words.length));
   slider2.value(index);

  text(words[slider2.value()], 30 , 200);


  //html element modify using DOM
  var myText = select('#h1');
  myText.style("font-family: Akkurat; color: red; position:absolute; width: 225px; position: absolute; width: 700px; margin: 0 auto; top: 13%; left: 32%; transform: translate(-50%, -50%); ");

  // slider2.changed(clickButton);
   // index += 0.01;


  // function mouseClicked() {
  //    var x = random(0,255);
  //    slider.stop();
  //  }
}

function clickButton() {

  // console.log(text);
  // slider2.stop();
  noLoop();
  // index = 0;
  // slider2.value(index);
  // text(words[index], 30 , 200);
  // text(words[index], 30 , 200);


  }
