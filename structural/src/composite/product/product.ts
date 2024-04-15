import { ProductComponent } from './product-component'

export class Product extends ProductComponent {
	private name: string
	private price: number

	constructor(name: string, price: number) {
		super()
		this.name = name
		this.price = price
	}

	public getPrice(): number {
		return this.price
	}
}
