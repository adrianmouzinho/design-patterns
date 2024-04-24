import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithoutCreamDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		this.drink.removeIngredient('Creme')
	}

	getPrice(): number {
		return this.drink.getPrice() + 3
	}
}
