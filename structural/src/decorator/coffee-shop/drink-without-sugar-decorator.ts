import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithoutSugarDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		this.drink.removeIngredient('Açucar')
	}

	getPrice(): number {
		return this.drink.getPrice() + 1
	}
}
