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
      let cantCirculosLinea = round(random(4, 8));
      posXCirculosConcentricos = i * intervalo;
      for (let j=0; j < cantCirculosLinea; j++) {
        posYCirculosConcentricos = j * height / (cantCirculosLinea-1);
        let posXRand = posXCirculosConcentricos + round(random(-35, 35));
        let posYRand = posYCirculosConcentricos + round(random(-25, 25));
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

  dibujar(intensidad, notaMidi, haySonido) {

    for (let i=0; i<this.seriesCirculos.length; i++) {
      this.seriesCirculos[i].iniciar();
      this.seriesCirculos[i].dibujar(intensidad, haySonido);
    }

    for ( let i=0; i<this.cantCirculosTinte; i++ ) {
      this.a[i].mover(notaMidi, haySonido);
      this.a[i].dibujarCirculo();
    }
    //for (let j=0; j<=this.cantCirculosTinte; j++) {
    //  this.circulosTinte[j].dibujar(j);
    //}
    }
  }
