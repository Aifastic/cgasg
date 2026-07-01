class SerieCirculos {
  constructor(posXCirculosConcentricos, posYCirculosConcentricos) {
    this.circulosOpacos = [];
    this.cant = round(random(6,11));
    this.posXCirculosConcentricos = posXCirculosConcentricos;
    this.posYCirculosConcentricos = posYCirculosConcentricos;
    this.escala = 20;
    this.tam = this.cant*this.escala;
  }

  iniciar() {
    for (let i=0; i<=this.cant; i++) {
      this.circulosOpacos[i] = new CirculoOpaco();
    }
  }

  actualizar(intensidad){
    let valorMax = this.cant * this.escala + 50;
    this.tam = this.cant * this.escala + intensidad * 500;
    if(this.tam > valorMax){
      this.tam = valorMax;
    }
  }

  dibujar() {
    let tamanio;
    for (let i=0; i<=this.cant; i++) {
      tamanio = this.tam - i * this.escala;
      this.circulosOpacos[i].dibujar(this.posXCirculosConcentricos, this.posYCirculosConcentricos, tamanio, i);
   }
  }
    
}