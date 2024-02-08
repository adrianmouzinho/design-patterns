export class Livro {
    titulo: string
    autor: string
    paginas: number
    estaDisponivel: boolean

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

    verificarDisponibilidade() {
        return this.estaDisponivel
    }
}