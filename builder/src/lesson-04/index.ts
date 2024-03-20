import { OrderBuilder } from './order-builder'

const builder = new OrderBuilder()

const order1 = builder
  .buildCustomer('Ana Luiza')
  .buildAddress({ uf: 'MA', city: 'Imperatriz', cep: '99999-999' })
  .buildItem({ name: 'Notebook Acer', price: 3000, amount: 1 })
  .buildItem({ name: 'Mouse', price: 69.99, amount: 1 })
  .getOrder()

const order2 = builder
  .buildCustomer('John Doe')
  .buildAddress({ uf: 'MA', city: 'Imperatriz', cep: '99999-998' })
  .buildItem({ name: 'Calça jeans', price: 75.50, amount: 2 })
  .getOrder()

console.log(order1)
console.log(order2)