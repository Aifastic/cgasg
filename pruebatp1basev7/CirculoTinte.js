class CirculoTinte {
  constructor(posXCirculosTinte, posYCirculosTinte) {
    this.color1 = color(255, 0, 0);
    this.color2 = 255;
    this.posXCirculosTinte = posXCirculosTinte;
    this.posYCirculosTinte = posYCirculosTinte;
    this.tamCirculosTinte = round(random(20, 70));
  }

  dibujar(patron) {
    fill(250);
    noStroke();
    blendMode(DIFFERENCE);
    ellipse(this.posXCirculosTinte, this.posYCirculosTinte, this.tamCirculosTinte, this.tamCirculosTinte);
    blendMode(BLEND);
    
  }
}
