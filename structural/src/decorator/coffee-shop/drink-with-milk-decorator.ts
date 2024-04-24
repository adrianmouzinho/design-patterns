import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithMilkDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		const hasMilk = this.drink.getIngredients().includes('Leite')
		if (hasMilk) return
		this.drink.addIngredient('Leite')
	}
	
	getPrice(): number {
		return this.drink.getPrice() + 2
	}
}
