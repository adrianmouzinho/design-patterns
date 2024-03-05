import { UserConcreteBuilder } from './user-concrete-builder'
import { UserDirector } from './user-director'

// Without Director
const builder = new UserConcreteBuilder()

const newPerson = builder.setName('Luiz').setCpf('555').getUser()
console.log('newPerson: ', newPerson)

const newSeller = builder
  .setName('Caio')
  .setCpf('777')
  .setPhone('123')
  .getUser()
console.log('newSeller: ', newSeller)

const newUser = builder.setName('Youtube').getUser()
console.log('newUser: ', newUser)

// With Director
// const director = new UserDirector()
// const builder = new UserConcreteBuilder()
// director.setBuilder(builder)

// director.buildCustomer('Adrian', '123', '99')
// const customer = builder.getUser()
// console.log('Customer: ', customer)

// director.buildSeller('Ana', '123')
// const seller = builder.getUser()
// console.log('Seller: ', seller)

// builder.setCpf('Youtube')
// const user = builder.getUser()
// console.log('Custom user: ', user)
