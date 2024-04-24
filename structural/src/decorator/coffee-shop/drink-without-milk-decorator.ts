import { DrinkDecorator } from './drink-decorator'
import type { Drink } from './drink.interface'

export class DrinkWithoutMilkDecorator extends DrinkDecorator {
	constructor(drink: Drink) {
		super(drink)
		this.drink.removeIngredient('Leite')
	}
	
	getPrice(): number {
		return this.drink.getPrice() + 2
	}
}
