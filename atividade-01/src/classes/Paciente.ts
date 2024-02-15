class Consulta {
  private paciente: string
  private medico: string
  private tipo: string
  private motivo: string
  private data: Date

  constructor(
    paciente: string,
    medico: string,
    tipo: string,
    motivo: string,
    data?: Date
  ) {
    this.paciente = paciente
    this.medico = medico
    this.tipo = tipo
    this.motivo = motivo
    this.data = data ?? new Date()
  }
}

export class Paciente {
  private nome: string
  private idade: number
  private consultas: Consulta[]

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
    this.consultas = []
  }

  criarConsulta(medico: string, tipo: string, motivo: string, data?: Date) {
    const consulta = new Consulta(this.nome, medico, tipo, motivo, data)

    this.consultas.push(consulta)

    return consulta
  }

  obterConsultas() {
    return this.consultas
  }

  obterNome() {
    return this.nome
  }

  obterIdade() {
    return this.idade
  }
}
