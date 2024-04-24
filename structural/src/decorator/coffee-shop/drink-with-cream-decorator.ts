import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithCreamDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		const hasCream = this.drink.getIngredients().includes('Creme')
		if (hasCream) return
		this.drink.addIngredient('Creme')
	}

	getPrice(): number {
		return this.drink.getPrice() + 4
	}
}
