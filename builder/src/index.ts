import { UserBuilder } from './user-builder'
import { UserDirector } from './user-director'

// Without Director
// const builder = new UserBuilder()

// const newPerson = builder.buildName('Luiz').buildCpf('555').getUser()
// console.log('newPerson: ', newPerson)

// const newSeller = builder
//   .buildName('Caio')
//   .buildCpf('777')
//   .buildPhone('123')
//   .getUser()
// console.log('newSeller: ', newSeller)

// const newUser = builder.buildName('Youtube').getUser()
// console.log('newUser: ', newUser)

// With Director
const director = new UserDirector()
const builder = new UserBuilder()
director.setBuilder(builder)

director.buildCustomer('Adrian', '123', '99')
const customer = builder.getUser()
console.log('Customer: ', customer)

director.buildSeller('Ana', '123')
const seller = builder.getUser()
console.log('Seller: ', seller)

builder.buildCpf('Youtube')
const user = builder.getUser()
console.log('Custom user: ', user)
