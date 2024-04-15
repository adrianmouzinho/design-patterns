export abstract class ProductComponent {
	public abstract getPrice(): number
	public add(product: ProductComponent): void {}
	public remove(product: ProductComponent): void {}
}
