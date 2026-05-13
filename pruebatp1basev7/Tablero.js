class Tablero {
  constructor (posYCirculosConcentricos, cantCirculos) {
    this.seriesCirculos = [];
    this.calculos = new Calculadora();
    this.cantCirculos = cantCirculos;
    this.posYCirculosConcentricos = posYCirculosConcentricos;
    this.posXCirculosConcentricos = 0;
    
  }

  iniciar() {
    for (let i=0; i<=5; i++) {
      this.seriesCirculos[i] = new SerieCirculos(this.posXCirculosConcentricos, this.posYCirculosConcentricos, this.cantCirculos);
      this.posXCirculosConcentricos = i * this.calculos.calcularRadioMayor();
    }
  }

  dibujar() {
    for (let i=0; i<=5; i++) {
      this.seriesCirculos[i].iniciar();
      this.seriesCirculos[i].dibujar();
    }
  }
}
