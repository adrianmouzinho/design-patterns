import { ProductDecorator } from './product-decorator'
import type { Product } from './product.interface'

export class ProductWithColorDecorator extends ProductDecorator {
	private color: string

	constructor(product: Product, color: string) {
		super(product)
		this.color = color
	}

	public getName(): string {
		return `${this.product.getName()} ${this.color}`
	}
}
