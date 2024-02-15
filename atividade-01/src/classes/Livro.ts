export class Livro {
  private titulo: string
  private autor: string
  private paginas: number
  private estaDisponivel: boolean

  constructor(titulo: string, autor: string, paginas: number) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.estaDisponivel = false
  }

  emprestar() {
    this.estaDisponivel = false
  }

  devolver() {
    this.estaDisponivel = true
  }

  obterDisponibilidade() {
    return this.estaDisponivel
  }

  obterTitylo() {
    return this.titulo
  }

  obterAutor() {
    return this.autor
  }

  obterPaginas() {
    return this.paginas
  }
}
