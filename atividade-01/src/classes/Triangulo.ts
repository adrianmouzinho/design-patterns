export class Triandulo {
  private lado1: number
  private lado2: number
  private lado3: number

  constructor(lado1: number, lado2: number, lado3: number) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
      throw new Error('Todos os lados precisam ser maiores do que zero.')
    }

    this.lado1 = lado1
    this.lado2 = lado2
    this.lado3 = lado3
  }

  eValido() {
    const condicao1 =
      Math.abs(this.lado2 - this.lado3) < this.lado1 &&
      this.lado1 < this.lado2 + this.lado3
    const condicao2 =
      Math.abs(this.lado1 - this.lado3) < this.lado2 &&
      this.lado2 < this.lado1 + this.lado3
    const condicao3 =
      Math.abs(this.lado1 - this.lado2) < this.lado3 &&
      this.lado3 < this.lado1 + this.lado2

    return condicao1 && condicao2 && condicao3
  }

  obterArea() {
    const eValido = this.eValido()

    if (!eValido) return null

    const semiPerimetro = (1 / 2) * (this.lado1 + this.lado2 + this.lado3)

    const area = Math.sqrt(
      semiPerimetro *
        (semiPerimetro - this.lado1) *
        (semiPerimetro - this.lado2) *
        (semiPerimetro - this.lado3)
    ).toFixed(2)

    return Number(area)
  }

  obterLados() {
    return [this.lado1, this.lado2, this.lado3]
  }
}
