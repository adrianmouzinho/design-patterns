import { UserConcreteBuilder } from './user-concrete-builder'

export interface UserBuilder {
  setName(name: string): UserConcreteBuilder
  setCpf(cpf: string): UserConcreteBuilder
  setPhone(phone: string): UserConcreteBuilder
}
