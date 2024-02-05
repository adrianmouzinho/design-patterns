import { Circulo } from "./classes/Circulo"
import { ContaBancaria } from "./classes/ContaBancaria"
import { Retangulo } from "./classes/Retangulo"


// Questão 01
// const circulo = new Circulo(4)
// console.log('Área do círculo: ' + circulo.obterArea())
// console.log('Perímetro do círculo: ' + circulo.obterPerimetro())
// console.log()



// Questão 02
const contaBancaria = new ContaBancaria('000123456-78', 'Adrian Mouzinho', 120.25)
console.log('Resultado do saque: ' + contaBancaria.sacar(-12))
console.log('Resultado do depósito: ' + contaBancaria.depositar(200))
console.log()

// Questão 03
// const retangulo = new Retangulo(2, 3)
// console.log('Área do retângulo: ' + retangulo.obterArea())
// console.log('Perímetro do retângulo: ' + retangulo.obterPerimetro())