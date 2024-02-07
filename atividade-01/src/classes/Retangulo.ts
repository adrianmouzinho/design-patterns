export class Retangulo {
    largura: number
    altura: number

    constructor(largura: number, altura: number) {
        this.altura = altura
        this.largura = largura
    }

    obterArea() {
        const area = Number((this.altura * this.largura).toFixed(2))

        return area
    }

    obterPerimetro() {
        const perimetro = Number(((2 * this.altura) + (2 * this.largura)).toFixed(2))
        
        return perimetro
    }
}