import { Border, Dough, Flavor, Sauce } from './pizza'
import { PizzaBuilder } from './pizza-builder'

export interface IPizzaBuilder {
  buildDough(dough: Dough): PizzaBuilder
  buildSauce(sauce: Sauce): PizzaBuilder
  buildBorder(border: Border): PizzaBuilder
  buildFlavor(flavor: Flavor): PizzaBuilder
}