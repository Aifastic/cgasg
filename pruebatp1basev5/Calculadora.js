class Calculadora {

  constructor() {
    this.cant = round(random(7, 10));
  }

  calcularCantidad() {
    let cantCirculos = this.cant;
    if (mouseIsPressed==true) {
      this.cant = round(random(7, 10) + mouseX);
    } else {
      this.cant = round(random(7, 10));
    }
    return cantCirculos;
  }

  calcularRadioMayor() {
    let radioMayor = this.cant * 10;
    return radioMayor;
  }
}
