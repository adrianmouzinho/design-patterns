import { Aluno } from "./classes/Aluno"
import { Carro } from "./classes/Carro"
import { Circulo } from "./classes/Circulo"
import { ContaBancaria } from "./classes/ContaBancaria"
import { Funcionario } from "./classes/Funcionario"
import { Livro } from "./classes/Livro"
import { Paciente } from "./classes/Paciente"
import { Produto } from "./classes/Produto"
import { Retangulo } from "./classes/Retangulo"
import { Triandulo } from "./classes/Triangulo"


// Questão 01
// const circulo = new Circulo(4)
// console.log('Área do círculo: ' + circulo.obterArea())
// console.log('Perímetro do círculo: ' + circulo.obterPerimetro())
// console.log()

// Questão 02
// const contaBancaria = new ContaBancaria('000123456-78', 'Adrian Mouzinho', 120.25)
// console.log('Resultado do saque: ' + contaBancaria.sacar(-12))
// console.log('Resultado do depósito: ' + contaBancaria.depositar(200))
// console.log()

// Questão 03
// const retangulo = new Retangulo(2, 3)
// console.log('Área do retângulo: ' + retangulo.obterArea())
// console.log('Perímetro do retângulo: ' + retangulo.obterPerimetro())
// console.log()

// Questão 04
// const aluno = new Aluno('Adrian', '20211BCC0008', [7, 5, 8, 8])
// console.log('Média do aluno: ' + aluno.obterMedia())
// console.log('Situação do aluno: ' + aluno.obterSituacaoDoAluno())
// console.log()

// Questão 05
// const funcionario = new Funcionario('João', 'gerente de vendas', 2500)
// console.log('Salário líquido: ' + funcionario.obterSalarioLiquido(250, 100))
// console.log()

// Questão 06
// const produto = new Produto('Notebook Acer Aspire 5', 2500, 22)
// console.log('Produto está disponível? ' + produto.estaDisponivel())
// console.log('Valor total em estoque: ' + produto.obterValorTotal())
// console.log()

// Questão 07
// const triangulo = new Triandulo(4, 5, 3)
// console.log('É um triângulo válido? ' + triangulo.eValido())
// console.log('Área do triangulo: ' + triangulo.obterArea())
// console.log()

// Questão 08
// const carro = new Carro('Fiat', 'Argo', 120.5)
// console.log('Velocidade atual: ' + carro.obterVelocidade())
// carro.acelerar()
// carro.acelerar()
// console.log('Velocidade atual: ' + carro.obterVelocidade())
// carro.desacelerar()
// console.log('Velocidade atual: ' + carro.obterVelocidade())
// console.log()


// Questão 09
// const paciente = new Paciente('Adrian', 21)
// paciente.criarConsulta('Dra. Beatriz', 'Consulta de rotina', 'Acompanhamento de saúde geral')
// paciente.criarConsulta('Dr. Marcos', 'Consulta de acompanhamento', 'Avaliação pós-operatória')
// const consultas = paciente.obterConsultas()
// console.log('Histórico de consultas do paciente: ')
// consultas.forEach(consulta => console.log(consulta))
// console.log()

//Questão 10
// const livro = new Livro('Macunaíma', 'Mário de Andrade', 192)
// livro.emprestar()
// console.log('O livro está disponível? ' + livro.verificarDisponibilidade())
// livro.devolver()
// console.log('O livro está disponível? ' + livro.verificarDisponibilidade())
