class CirculoTinte {
  constructor() {
    this.color1 = color(255, 0, 0);
    this.color2 = 255;
    this.posXCirculosTinte = random(width);
    this.posYCirculosTinte = random(height);
    this.dir = random(TWO_PI);
    this.vel = random(3, 7);
    this.tamCirculosTinte = round(random(60, 200));
    this.variacionAngular = 15;
    this.estado = "quieto";
  }

  dibujarCirculo() {
    fill(250);
    noStroke();
    blendMode(DIFFERENCE);
    ellipse(this.posXCirculosTinte, this.posYCirculosTinte, this.tamCirculosTinte, this.tamCirculosTinte);
    blendMode(BLEND);
  }

  mover(altura, haySonido, durSonido) {
      this.dir += radians(random(-this.variacionAngular, this.variacionAngular));
      let mapMidi = altura;
      let dx = (this.vel * mapMidi) * cos(this.dir) * deltaTime/30;
      let dy = (this.vel * mapMidi) * sin(this.dir) * deltaTime/30;
      this.posXCirculosTinte += dx;
      this.posYCirculosTinte += dy;

      this.posXCirculosTinte = ( this.posXCirculosTinte > width ? this.posXCirculosTinte-width : this.posXCirculosTinte );
      this.posXCirculosTinte = ( this.posXCirculosTinte < 0 ? this.posXCirculosTinte+width : this.posXCirculosTinte );
      this.posYCirculosTinte = ( this.posYCirculosTinte > height ? this.posYCirculosTinte-height : this.posYCirculosTinte );
      this.posYCirculosTinte = ( this.posYCirculosTinte < 0 ? this.posYCirculosTinte+height : this.posYCirculosTinte );
  }
}
