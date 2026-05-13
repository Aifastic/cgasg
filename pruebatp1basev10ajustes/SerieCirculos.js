class SerieCirculos {
  constructor(posXCirculosConcentricos, posYCirculosConcentricos) {
    this.circulosOpacos = [];
    this.cant = round(random(6,11));
    this.posXCirculosConcentricos = posXCirculosConcentricos;
    this.posYCirculosConcentricos = posYCirculosConcentricos;
  }

  iniciar() {
    for (let i=0; i<=this.cant; i++) {
      this.circulosOpacos[i] = new CirculoOpaco();
    }
  }

  dibujar(coloreado) {
    for (let i=0; i<=this.cant; i++) {
      let tam = (this.cant-i) * 17;
      this.circulosOpacos[i].dibujar(this.posXCirculosConcentricos, this.posYCirculosConcentricos, tam, i);
    }
    
  }
}
