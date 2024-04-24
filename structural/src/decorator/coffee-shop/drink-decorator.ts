import type { Drink } from './drink.interface'

export class DrinkDecorator implements Drink {
	protected drink: Drink

	constructor(drink: Drink) {
		this.drink = drink
	}

	getName(): string {
		return this.drink.getName()
	}

	getPrice(): number {
		return this.drink.getPrice()
	}

	getIngredients(): string[] {
		return this.drink.getIngredients()
	}

	addIngredient(ingredient: string): void {
		this.drink.addIngredient(ingredient)
	}

	removeIngredient(ingredient: string): void {
		this.drink.removeIngredient(ingredient)
	}
}
