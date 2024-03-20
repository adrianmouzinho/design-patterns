import { HouseBuilder } from './house-builder'

const builder = new HouseBuilder()

const house1 = builder
  .buildRoom({ name: 'Quarto', width: 6, length: 7, amount: 3 })
  .buildRoom({ name: 'Cozinha', width: 8, length: 5, amount: 1 })
  .buildRoom({ name: 'Banheiro', width: 3, length: 5, amount: 2 })
  .buildRoom({ name: 'Sala de estar', width: 5, length: 5, amount: 1 })
  .getHouse()

console.log(house1)