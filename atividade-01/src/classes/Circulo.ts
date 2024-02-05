export class Circulo {
    raio: number

    constructor(raio: number) {
        this.raio = raio
    }

    obterArea() {
        return (Math.PI * (this.raio ** 2)).toFixed(2)
    }

    obterPerimetro() {
        return (2 * Math.PI * this.raio).toFixed(2)
    }
}