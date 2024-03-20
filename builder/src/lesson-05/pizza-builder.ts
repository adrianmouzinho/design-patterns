import { Border, Dough, Flavor, Pizza, Sauce } from './pizza'
import { IPizzaBuilder } from './pizza-builder.interface'

export class PizzaBuilder implements IPizzaBuilder {
  private pizza?: Pizza

  constructor() {
    this.reset()
  }
  buildDough(dough: Dough): PizzaBuilder {
    this.pizza!.dough = dough
    return this
  }

  buildSauce(sauce: Sauce): PizzaBuilder {
    this.pizza!.sauce = sauce
    return this
  }

  buildBorder(border: Border): PizzaBuilder {
    this.pizza!.border = border
    return this
  }

  buildFlavor(flavor: Flavor): PizzaBuilder {
    this.pizza!.flavor = flavor
    return this
  }

  public reset(): void {
    this.pizza = new Pizza()
  }

  public getPizza(): Pizza {
    const pizza = this.pizza!
    this.reset()
    return pizza
  }
}