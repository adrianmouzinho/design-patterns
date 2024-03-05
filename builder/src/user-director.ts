import { UserBuilder } from './user-builder'

export class UserDirector {
  private builder?: UserBuilder

  public setBuilder(builder: UserBuilder): void {
    this.builder = builder
  }

  public buildCustomer(name: string, cpf: string, phone: string) {
    this.builder?.setName(name)
    this.builder?.setCpf(cpf)
    this.builder?.setPhone(phone)
  }

  public buildSeller(name: string, cpf: string) {
    this.builder?.setName(name)
    this.builder?.setCpf(cpf)
  }
}
