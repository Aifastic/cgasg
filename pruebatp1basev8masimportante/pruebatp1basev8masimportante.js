let obra;

function setup() {
  createCanvas(500, 500);
  obra = new Obra();
  obra.iniciar();
}


function draw() {
  background(255);
  obra.dibujar();
}
