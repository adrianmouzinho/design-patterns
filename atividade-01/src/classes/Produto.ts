export class Produto {
    nome: string
    preco: number
    estoque: number

    constructor(nome: string, preco: number, estoque: number) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    obterValorTotal() {
        const total = Number((this.preco * this.estoque).toFixed(2))

        return total
    }

    estaDisponivel() {
        return this.estoque !== 0
    }
}