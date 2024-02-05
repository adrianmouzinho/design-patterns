export class ContaBancaria {
    conta: string
    titular: string
    saldo: number 

    constructor(conta: string, titular: string, saldo: number) {
        this.conta = conta
        this.titular = titular
        this.saldo = saldo
    }


    depositar(valor: number) {
        this.saldo += valor
        return `Você depositou ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, agora seu saldo atual é ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`
    }

    sacar(valor: number) {
        if (valor <= 0) {
            return 'Você só consegue sacar um valor maior que R$ 0,00.'
        }

        if (valor > this.saldo) {
            return 'Você não pode sacar um valor maior que o seu saldo.'
        }

        this.saldo -= valor
        return `Você sacou ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, agora seu saldo atual é ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`
    }
}