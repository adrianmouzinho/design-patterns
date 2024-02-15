export class Aluno {
  private nome: string
  private matricula: string
  private notas: number[]

  constructor(nome: string, matricula: string, notas: number[]) {
    for (const nota of notas) {
      if (nota < 0 || nota > 10) {
        throw new Error(
          'Todas as notas precisam estar dentro do intervalo de 0 a 10.'
        )
      }
    }

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

  obterNome() {
    return this.nome
  }

  obterMatricula() {
    return this.matricula
  }

  obterNotas() {
    return this.notas
  }
}
