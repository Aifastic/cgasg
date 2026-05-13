let obra;
let mouseClickeado = true;


function setup() {
  angleMode(RADIANS);
  createCanvas(500, 500);
  obra = new Obra();
  obra.iniciar();

}


function draw() {
  background(255);
  obra.dibujar(mouseClickeado);
}

function mouseClicked(){
    mouseClickeado = !mouseClickeado
}
