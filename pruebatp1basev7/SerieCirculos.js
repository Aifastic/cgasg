class SerieCirculos {
  constructor(posYCirculosConcentricos, posXCirculosConcentricos, cant) {
    this.circulosOpacos = [];
    this.cant = cant;
    this.posXCirculosConcentricos = posXCirculosConcentricos;
    this.posYCirculosConcentricos = posYCirculosConcentricos;
  }

  iniciar() {
      for (let i=0; i<=this.cant; i++) {
        this.circulosOpacos[i] = new CirculoOpaco();
      }
  }


  dibujar() {
      for (let i=0; i<=this.cant; i++) {
        let tam;
        if (mouseIsPressed == false) {
          tam = (this.cant-i)*7;
        } else {
          tam = (this.cant-i)*7 + (mouseX/5);
        }
        this.circulosOpacos[i].dibujar(this.posYCirculosConcentricos, this.posXCirculosConcentricos, tam, i);
      }
  }
}
