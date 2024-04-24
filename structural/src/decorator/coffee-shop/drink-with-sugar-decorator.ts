import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithSugarDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		const hasSugar = this.drink.getIngredients().includes('Açucar')
		if (hasSugar) return
		this.drink.addIngredient('Açucar')
	}

	getPrice(): number {
		return this.drink.getPrice() + 1
	}
}
