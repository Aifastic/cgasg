class Obra {
  constructor() {
    this.seriesCirculos = [];
    this.circulosTinte = [];
    this.cantCirculosTinte = round(random(6, 15));
    this.calculos = new Calculadora();
    this.posXCirculosConcentricos = 0;
    this.posYCirculosConcentricos = 0;
  }

  iniciar() {
    for (let i=0; i<=15; i++) {
      this.calculos.calcularCantidad();
      this.calculos.calcularRadioMayor();
      this.seriesCirculos[i] = new SerieCirculos(this.posXCirculosConcentricos, this.posYCirculosConcentricos, this.calculos.calcularCantidad());
      this.posXCirculosConcentricos = this.posXCirculosConcentricos + this.calculos.calcularRadioMayor();
      this.posYCirculosConcentricos = this.posYCirculosConcentricos + this.calculos.calcularRadioMayor();
    }

    /*let posXCirculosTinte = round (random(50, 450));
     let posYCirculosTinte = round (random(50, 450));
     for (let j=0; j<=this.cantCirculosTinte; j++) {
     this.circulosTinte[j] = new CirculoTinte(posXCirculosTinte, posYCirculosTinte);
     posXCirculosTinte = round (random(0, 500));
     posYCirculosTinte = round (random(0, 500));
     }*/
  }

  dibujar() {

    for (let i=0; i<=15; i++) {
      /*this.seriesCirculos[i].calcularRadio();
      let colision = dist(this.posXCirculosConcentricos, this.posYCirculosConcentricos, this.posXCirculosConcentricos + this.seriesCirculos[i].calcularRadio(), this.posYCirculosConcentricos + this.seriesCirculos[i].calcularRadio());
      */
      
      this.seriesCirculos[i].iniciar();
      this.seriesCirculos[i].dibujar();
      
    }
    /* for (let j=0; j<=this.cantCirculosTinte; j++) {
     this.circulosTinte[j].dibujar(j);
     }*/
  }
  
}
