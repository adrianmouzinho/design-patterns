import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithSyrupDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		const hasSugar = this.drink.getIngredients().includes('Xarope')
		if (hasSugar) return
		this.drink.addIngredient('Xarope')
	}

	getPrice(): number {
		return this.drink.getPrice() + 3
	}
}
