class Obra {
  constructor() {
    this.seriesCirculos = [];
    this.circulosTinte = [];
    this.a = [];
    this.cantCirculosTinte = round(random(6, 15));
  }

  iniciar() {
    let posXCirculosConcentricos;
    let posYCirculosConcentricos;
    let numLineas = 7;
    let intervalo = round(width / (numLineas-1));
    let numCirculo = 0;
    for (let i=0; i<numLineas; i++) {
      let cantCirculosLinea = round(random(5, 8));
      posXCirculosConcentricos = i * intervalo;
      for (let j=0; j < cantCirculosLinea; j++) {
        posYCirculosConcentricos = j * height / (cantCirculosLinea-1);
        let posXRand = posXCirculosConcentricos + round(random(-40, 40));
        let posYRand = posYCirculosConcentricos + round(random(-30, 30));
        this.seriesCirculos[numCirculo] = new SerieCirculos(posXRand, posYRand);
        numCirculo++;
      }
    }
    this.seriesCirculos = shuffle(this.seriesCirculos);


    for (let i=0; i<this.cantCirculosTinte; i++ ) {
      this.a.push(new CirculoTinte());
    }
  }

  /*let posXCirculosTinte = round (random(50, 450));
   let posYCirculosTinte = round (random(50, 450));
   for (let j=0; j<=this.cantCirculosTinte; j++) {
   this.circulosTinte[j] = new CirculoTinte(posXCirculosTinte, posYCirculosTinte);
   posXCirculosTinte = round (random(0, 500));
   posYCirculosTinte = round (random(0, 500));
   }*/

  dibujar(mouseClickeado) {

    for (let i=0; i<this.seriesCirculos.length; i++) {
      this.seriesCirculos[i].iniciar();
      this.seriesCirculos[i].dibujar();
    }

    for ( let i=0; i<this.cantCirculosTinte; i++ ) {
      this.a[i].mover();
      this.a[i].dibujarCirculo();
    }
    //for (let j=0; j<=this.cantCirculosTinte; j++) {
    //  this.circulosTinte[j].dibujar(j);
    //}
    if (mouseClickeado==true) {
      fill(250);
      noStroke();
      blendMode(DIFFERENCE);
      rect(0, 0, width, height);
      blendMode(BLEND);
    } else {
      null;
    }
  }
}
