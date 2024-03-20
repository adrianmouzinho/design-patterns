import { PizzaBuilder } from './pizza-builder'

const builder = new PizzaBuilder()

const pizza1 = builder
  .buildDough('Tradicional')
  .buildSauce('Tradicional de tomate')
  .buildBorder('Cheddar')
  .buildFlavor('Calabresa')
  .getPizza()

const pizza2 = builder
  .buildDough('Tradicional')
  .buildSauce('Tradicional de tomate')
  .buildBorder('Sem borda')
  .buildFlavor('4 Queijos')
  .getPizza()

console.log(pizza1)
console.log(pizza2)