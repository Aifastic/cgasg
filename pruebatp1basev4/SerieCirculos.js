class SerieCirculos {
  constructor(posXCirculosConcentricos, posYCirculosConcentricos) {
    this.circulosOpacos = [];
    this.cant = round(random(7, 10));
    this.posXCirculosConcentricos = posXCirculosConcentricos;
    this.posYCirculosConcentricos = posYCirculosConcentricos;
  }

  iniciar() {
    for (let i=0; i<=this.cant; i++) {
      this.circulosOpacos[i] = new CirculoOpaco();
    }
  }

  calcularRadio(){
    let radio = this.cant * 10;
    return radio;
  }

  dibujar() {
    for (let i=0; i<=this.cant; i++) {
      let tam = (this.cant-i)*10;
      this.circulosOpacos[i].dibujar(this.posXCirculosConcentricos, this.posYCirculosConcentricos, tam, i);
    }
    
  }
}
