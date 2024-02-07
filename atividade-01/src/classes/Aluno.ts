export class Aluno {
    nome: string
    matricula: string
    notas: number[]

    constructor(nome: string, matricula: string, notas: number[]) {
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
    }

    obterMedia() {
        const somaDasNotas = this.notas.reduce((acc, nota) => {
            return acc + nota
        }, 0)

        const media = Number((somaDasNotas / this.notas.length).toFixed(2))

        return media
    }

    obterSituacaoDoAluno() {
        const media = this.obterMedia()

        if (media < 7) {
            return 'reprovado'
        }

        return 'aprovado'
    }
}