export class Carro {
  private marca: string
  private modelo: string
  private velocidade: number

  constructor(marca: string, modelo: string, velocidade: number) {
    this.marca = marca
    this.modelo = modelo
    this.velocidade = velocidade
  }

  acelerar(valor: number = 1) {
    this.velocidade += valor
  }

  desacelerar(valor: number = 1) {
    this.velocidade -= valor
  }

  obterVelocidade() {
    return this.velocidade
  }

  obterMarca() {
    return this.marca
  }

  obterModelo() {
    return this.modelo
  }
}
