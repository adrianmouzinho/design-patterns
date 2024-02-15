export class Retangulo {
  private largura: number
  private altura: number

  constructor(largura: number, altura: number) {
    if (largura < 0 || altura < 0) {
      throw new Error(
        'A altura e a largura precisam ser maiores ou iguais a zero.'
      )
    }

    this.altura = altura
    this.largura = largura
  }

  obterArea() {
    const area = Number((this.altura * this.largura).toFixed(2))

    return area
  }

  obterPerimetro() {
    const perimetro = Number((2 * this.altura + 2 * this.largura).toFixed(2))

    return perimetro
  }

  obterLargura() {
    return this.largura
  }

  obterAltura() {
    return this.altura
  }
}
