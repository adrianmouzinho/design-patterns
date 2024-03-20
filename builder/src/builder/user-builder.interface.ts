import { UserBuilder } from './user-builder'

export interface IUserBuilder {
  buildName(name: string): UserBuilder
  buildCpf(cpf: string): UserBuilder
  buildPhone(phone: string): UserBuilder
}
