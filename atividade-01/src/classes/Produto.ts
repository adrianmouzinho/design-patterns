export class Produto {
  private nome: string
  private preco: number
  private estoque: number

  constructor(nome: string, preco: number, estoque: number) {
    if (preco <= 0) {
      throw new Error('O preço precisa ser maior que R$ 0,00.')
    }

    if (estoque < 0) {
      throw new Error('O estoque precisa ser maior ou igual a 0.')
    }

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

  obterNome() {
    return this.nome
  }

  obterPreco() {
    return this.preco
  }

  obterEstoque() {
    return this.estoque
  }
}
