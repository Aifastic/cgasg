class Obra {
  constructor() {
    this.tablero = [];
    //this.seriesCirculos = [];
    this.circulosTinte = [];
    this.cantCirculosTinte = round(random(6, 15));
    this.calculos = new Calculadora();
    this.posYCirculosConcentricos = 0;
    this.cantCirculosOpacos = this.calculos.calcularCantidadCirculos();
    /*this.cantSeriesX = (round(random(2,6)));
     this.ubicacionX = map (this.cantSeriesX, 0,6,0,100);
     this.ubicacionY = map (6,0,6,0,100);*/
  }

  iniciar() {

    for (let i=0; i<=7; i++) {
      this.tablero[i] = new Tablero(this.posYCirculosConcentricos, this.calculos.calcularCantidadCirculos());
      this.posYCirculosConcentricos = i * this.calculos.calcularRadioMayor(this.cantCirculosOpacos);
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
    for (let i=0; i<=7; i++) {
      this.tablero[i].iniciar();
      this.tablero[i].dibujar();
      //for (let i=0; i<=5; i++) {
      /*this.seriesCirculos[i].calcularRadio();
       let colision = dist(this.posXCirculosConcentricos, this.posYCirculosConcentricos, this.posXCirculosConcentricos + this.seriesCirculos[i].calcularRadio(), this.posYCirculosConcentricos + this.seriesCirculos[i].calcularRadio());
       */
      /*this.seriesCirculos[i].iniciar();
       this.seriesCirculos[i].dibujar();*/
      //this.seriesCirculos[j].dibujar();
    }
  }
  /* for (let j=0; j<=this.cantCirculosTinte; j++) {
   this.circulosTinte[j].dibujar(j);
   }*/
}
