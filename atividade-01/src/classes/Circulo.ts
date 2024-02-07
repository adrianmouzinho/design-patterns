export class Circulo {
    raio: number

    constructor(raio: number) {
        this.raio = raio
    }

    obterArea() {
        const area = Number((Math.PI * (this.raio ** 2)).toFixed(2))

        return area
    }

    obterPerimetro() {
        const perimetro = Number((2 * Math.PI * this.raio).toFixed(2))

        return perimetro
    }
}