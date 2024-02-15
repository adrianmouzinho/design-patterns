export class ContaBancaria {
  private conta: string
  private titular: string
  private saldo: number

  constructor(conta: string, titular: string, saldo: number) {
    if (saldo < 0) {
      throw new Error('Você não pode iniciar uma conta com saldo negativo.')
    }

    this.conta = conta
    this.titular = titular
    this.saldo = saldo
  }

  depositar(valor: number) {
    if (valor <= 0) {
      throw new Error('Você só consegue depositar um valor maior que R$ 0,00.')
    }

    this.saldo += valor
  }

  sacar(valor: number) {
    if (valor <= 0) {
      throw new Error('Você só consegue sacar um valor maior que R$ 0,00.')
    }

    if (valor > this.saldo) {
      throw new Error('Você não pode sacar um valor maior que o seu saldo.')
    }

    this.saldo -= valor
  }

  obterSaldo() {
    return this.saldo.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  obterTitular() {
    return this.titular
  }

  obterConta() {
    return this.conta
  }
}
