export class Retangulo {
    largura: number
    altura: number

    constructor(largura: number, altura: number) {
        this.altura = altura
        this.largura = largura
    }

    obterArea() {
        return (this.altura * this.largura).toFixed(2)
    }

    obterPerimetro() {
        return ((2 * this.altura) + (2 * this.largura)).toFixed(2)
    }
}