export interface Drink {
	getName(): string
	getPrice(): number
	getIngredients(): string[]
	addIngredient(ingredient: string): void
	removeIngredient(ingredient: string): void
}
