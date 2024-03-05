import { Pool } from 'pg'

export class Database {
  // eslint-disable-next-line
  private static instance: Database
  private pool: Pool

  private constructor() {
    // Configure a conexão com o banco de dados
    this.pool = new Pool({
      user: 'docker',
      host: 'localhost',
      database: 'test',
      password: 'docker',
      port: 5432,
    })
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  // eslint-disable-next-line
  public async query(queryString: string, values?: any[]): Promise<any> {
    try {
      const client = await this.pool.connect()
      const result = await client.query(queryString, values)
      client.release()
      return result
    } catch (error) {
      console.error('Erro na consulta ao banco de dados:', error)
      throw error
    }
  }
}
