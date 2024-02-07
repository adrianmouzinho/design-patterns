export class Triandulo {
    lado1: number
    lado2: number
    lado3: number

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    eValido() {
        const condicao1 = Math.abs(this.lado2 - this.lado3) < this.lado1 && this.lado1 < this.lado2 + this.lado3
        const condicao2 = Math.abs(this.lado1 - this.lado3) < this.lado2 && this.lado2 < this.lado1 + this.lado3
        const condicao3 = Math.abs(this.lado1 - this.lado2) < this.lado3 && this.lado3 < this.lado1 + this.lado2

        return condicao1 && condicao2 && condicao3
    }

    obterArea() {
        const semiPerimetro = (1/2)*(this.lado1, this.lado2, this.lado3)

        const area = Math.sqrt(semiPerimetro * (semiPerimetro - this.lado1) * (semiPerimetro - this.lado2) * (semiPerimetro - this.lado3))
        
        return area
    }
}