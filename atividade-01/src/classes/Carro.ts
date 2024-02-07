export class Carro {
    marca: string
    modelo: string
    velocidade: number

    constructor(marca: string, modelo: string, velocidade: number) {
        this.marca = marca
        this.modelo = modelo
        this.velocidade = velocidade
    }

    acelerar() {
        this.velocidade++
    }

    desacelerar() {
        this.velocidade--
    }

    obterVelocidade() {
        return this.velocidade
    }
}