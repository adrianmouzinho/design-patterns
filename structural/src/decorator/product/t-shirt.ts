import type { Product } from './product.interface'

export class TShirt implements Product {
	private name: string
	private price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	public getName(): string {
		return this.name
	}

	public getPrice(): number {
		return this.price
	}
}
