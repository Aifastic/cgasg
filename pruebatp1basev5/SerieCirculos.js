class SerieCirculos {
  constructor(posXCirculosConcentricos, posYCirculosConcentricos, cant) {
    this.circulosOpacos = [];
    this.cant = cant;
    this.posXCirculosConcentricos = posXCirculosConcentricos;
    this.posYCirculosConcentricos = posYCirculosConcentricos;
  }

  iniciar() {
    for (let h=0; h<=this.cant; h++) {
      for (let i=0; i<=this.cant; i++) {
        this.circulosOpacos[i] = new CirculoOpaco();
      }
    }
  }


  dibujar() {
    for (let h=0; h<=360; h++) {
      rotate(radians(h));
      push();
      for (let i=0; i<=this.cant; i++) {
        let tam;
        if (mouseIsPressed == false) {
          tam = (this.cant-i)*10;
        } else {
          tam = (this.cant-i)*10 + (mouseX/5);
        }
        this.circulosOpacos[i].dibujar(this.posXCirculosConcentricos, this.posYCirculosConcentricos, tam, i);
      }
    }
  }
}
