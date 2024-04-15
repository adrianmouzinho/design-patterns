import { ProductComponent } from './product-component'

export class CompositeProduct extends ProductComponent {
	private children: ProductComponent[] = []

	public getPrice(): number {
		return this.children.reduce((total, child) => {
			return total + child.getPrice()
		}, 0)
	}

	public add(...products: ProductComponent[]): void {
		for (const product of products) {
			this.children.push(product)
		}
	}

	public remove(product: ProductComponent): void {
		const productIndex = this.children.indexOf(product)
		if (productIndex === -1) return
		this.children.splice(productIndex, 1)
	}
}
