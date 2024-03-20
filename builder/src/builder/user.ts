export class User {
  private _name?: string
  private _cpf?: string
  private _phone?: string

  public get name(): string | undefined {
    return this._name
  }

  public set name(name: string) {
    this._name = name
  }

  public get cpf(): string | undefined {
    return this._cpf
  }

  public set cpf(cpf: string) {
    this._cpf = cpf
  }

  public get phone(): string | undefined {
    return this._phone
  }

  public set phone(phone: string) {
    this._phone = phone
  }
}
