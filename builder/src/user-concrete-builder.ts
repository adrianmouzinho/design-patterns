import { User } from './user'
import { UserBuilder } from './user-builder'

export class UserConcreteBuilder implements UserBuilder {
  private user?: User

  constructor() {
    this.reset()
  }

  public setName(name: string): UserConcreteBuilder {
    this.user!.name = name
    return this
  }

  public setCpf(cpf: string): UserConcreteBuilder {
    this.user!.cpf = cpf
    return this
  }

  public setPhone(phone: string): UserConcreteBuilder {
    this.user!.phone = phone
    return this
  }

  public reset(): void {
    this.user = new User()
  }

  public getUser(): User {
    const user = this.user!
    this.reset()
    return user
  }
}
