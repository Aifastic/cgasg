class CirculoTinte {
  constructor() {
    this.color1 = color(255, 0, 0);
    this.color2 = 255;
    this.posXCirculosTinte = random( width );
    this.posYCirculosTinte = random( height );
    this.dir = random(TWO_PI);
    this.vel = random( 3, 7 );
    this.tamCirculosTinte = round(random(60, 200));
    this.variacionAngular = 15;
  }

  menorDistAngular(origen, destino ) {
    let origenNorm = rangoTwoPi(origen);
    let destinoNorm = rangoTwoPi(destino);

    let diferencia = destinoNorm - origenNorm;

    if (diferencia>PI) {
      diferencia -= TWO_PI;
    }
    return diferencia;
  }

  dibujarCirculo() {
    fill(250);
    noStroke();
    blendMode(DIFFERENCE);
    ellipse(this.posXCirculosTinte, this.posYCirculosTinte, this.tamCirculosTinte, this.tamCirculosTinte);
    blendMode(BLEND);
  }

  mover() {
    if (mouseY >250) {
      this.dir += radians(random(-this.variacionAngular, this.variacionAngular));

      let dx = this.vel * cos(this.dir) * deltaTime/30;
      let dy = this.vel * sin(this.dir) * deltaTime/30;
      this.posXCirculosTinte += dx;
      this.posYCirculosTinte += dy;

      this.posXCirculosTinte = ( this.posXCirculosTinte > width ? this.posXCirculosTinte-width : this.posXCirculosTinte );
      this.posXCirculosTinte = ( this.posXCirculosTinte < 0 ? this.posXCirculosTinte+width : this.posXCirculosTinte );
      this.posYCirculosTinte = ( this.posYCirculosTinte > height ? this.posYCirculosTinte-height : this.posYCirculosTinte );
      this.posYCirculosTinte = ( this.posYCirculosTinte < 0 ? this.posYCirculosTinte+height : this.posYCirculosTinte );
    } else {
      null;
    }
  }

  perseguir (mx, my) {
    let nuevaDir = atan2( my-this.posYCirculosTinte, mx-this.posXCirculosTinte );
    let diferencia = menorDistAngular(this.dir, nuevaDir);
    this.dir += diferencia * 0.05;
  }
}
