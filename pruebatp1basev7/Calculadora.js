class Calculadora {

  constructor() {
    this.cant = round(random(7, 11));
  }

  calcularCantidadCirculos() {
    let cantCirculos = this.cant;
    this.cant = round(random(7, 11));
    return cantCirculos;
  }


  calcularRadioMayor(cantCirculos) {
    let radioMayor = this.cant * 10;
    return radioMayor;
  }
}
