import type { Product } from './product.interface'

export class ProductDecorator implements Product {
	protected product: Product

	constructor(product: Product) {
		this.product = product
	}

	public getName(): string {
		return this.product.getName()
	}

	public getPrice(): number {
		return this.product.getPrice()
	}
}
