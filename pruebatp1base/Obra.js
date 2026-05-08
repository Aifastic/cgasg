class Obra {
  constructor() {
    this.seriesCirculos = [];
    this.circulosTinte = [];
    this.cantCirculosTinte = round(random(6, 15));
  }

  iniciar() {
    let posXCirculosConcentricos = round (random(0, 500));
    let posYCirculosConcentricos = round (random(0, 500));
    for (let i=0; i<=100; i++) {
      this.seriesCirculos[i] = new SerieCirculos(posXCirculosConcentricos, posYCirculosConcentricos);
      posXCirculosConcentricos = round (random(0, 500));
      posYCirculosConcentricos = round (random(0, 500));
      
    }
    let posXCirculosTinte = round (random(50, 450));
    let posYCirculosTinte = round (random(50, 450));
    for (let j=0; j<=this.cantCirculosTinte; j++) {
      this.circulosTinte[j] = new CirculoTinte(posXCirculosTinte, posYCirculosTinte);
      posXCirculosTinte = round (random(0, 500));
      posYCirculosTinte = round (random(0, 500));
    }
  }

  dibujar() {

    for (let i=0; i<=100; i++) {
      this.seriesCirculos[i].iniciar();
      this.seriesCirculos[i].dibujar();
      
    }
        for (let j=0; j<=this.cantCirculosTinte; j++) {
      this.circulosTinte[j].dibujar(j);
    }
  }
}
