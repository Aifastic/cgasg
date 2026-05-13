let obra;

function setup() {
  createCanvas(windowWidth,windowHeight);
  obra = new Obra();
  obra.iniciar();
}


function draw() {
  background(255);
  obra.dibujar();
}
