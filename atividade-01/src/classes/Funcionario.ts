export class Funcionario {
    nome: string
    cargo: string
    salarioBruto: number

    constructor(nome: string, cargo: string, salarioBruto: number) {
        this.nome = nome
        this.cargo = cargo
        this.salarioBruto = salarioBruto
    }

    obterSalarioLiquido(impostos: number, beneficios: number) {
        const salarioLiquido = Number((this.salarioBruto + beneficios - impostos).toFixed(2))

        return salarioLiquido
    }
}