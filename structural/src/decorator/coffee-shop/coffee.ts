import type { Drink } from './drink.interface'

export class Coffee implements Drink {
	private name: string
	private price: number
	private ingredients: string[]

	constructor(name: string, price: number, ingredients: string[]) {
		this.name = name
		this.price = price
		this.ingredients = ingredients
	}

	getName(): string {
		return this.name
	}

	getPrice(): number {
		return this.price
	}

	getIngredients(): string[] {
		return this.ingredients
	}

	addIngredient(ingredient: string): void {
		const ingredientIndex = this.ingredients.indexOf(ingredient)
		if (ingredientIndex !== -1) return
		this.ingredients.push(ingredient)
	}

	removeIngredient(ingredient: string): void {
		const ingredientIndex = this.ingredients.indexOf(ingredient)
		if (ingredientIndex === -1) return
		this.ingredients.splice(ingredientIndex, 1)
	}
}
