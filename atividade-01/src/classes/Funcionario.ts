export class Funcionario {
  private nome: string
  private cargo: string
  private salarioBruto: number

  constructor(nome: string, cargo: string, salarioBruto: number) {
    if (salarioBruto < 0) {
      throw new Error('Você informou um salário bruto negativo.')
    }

    this.nome = nome
    this.cargo = cargo
    this.salarioBruto = salarioBruto
  }

  obterSalarioLiquido(impostos: number, beneficios: number) {
    const salarioLiquido = Number(
      (this.salarioBruto + beneficios - impostos).toFixed(2)
    )

    return salarioLiquido
  }

  obterNome() {
    return this.nome
  }

  obterCargo() {
    return this.cargo
  }

  obterSalarioBruto() {
    return this.salarioBruto
  }
}
