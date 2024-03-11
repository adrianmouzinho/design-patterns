import { User } from './user'
import { IUserBuilder } from './user-builder.interface'

export class UserBuilder implements IUserBuilder {
  private user?: User

  constructor() {
    this.reset()
  }

  public reset(): void {
    this.user = new User()
  }

  public buildName(name: string): UserBuilder {
    this.user!.name = name
    return this
  }

  public buildCpf(cpf: string): UserBuilder {
    this.user!.cpf = cpf
    return this
  }

  public buildPhone(phone: string): UserBuilder {
    this.user!.phone = phone
    return this
  }

  public getUser(): User {
    const user = this.user!
    this.reset()
    return user
  }
}
