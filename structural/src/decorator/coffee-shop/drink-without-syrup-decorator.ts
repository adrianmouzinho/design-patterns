import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithoutSyrupDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		this.drink.removeIngredient('Xarope')
	}

	getPrice(): number {
		return this.drink.getPrice() + 3
	}
}
