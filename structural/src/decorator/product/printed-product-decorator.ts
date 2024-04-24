import { ProductDecorator } from './product-decorator'

export class PrintedProductDecorator extends ProductDecorator {
	public getName(): string {
		return `${this.product.getName()} estampada`
	}

	public getPrice(): number {
		return this.product.getPrice() + 10
	}
}
