import { PrintedProductDecorator } from './printed-product-decorator'
import { ProductWithColorDecorator } from './product-with-color-decorator'
import type { Product } from './product.interface'
import { TShirt } from './t-shirt'

function clientCode(product: Product) {
	console.log(`Nome: ${product.getName()}`)
	console.log(`Preço: ${product.getPrice()}`)
}

const tShirt = new TShirt('Camiseta', 44.9)
console.log('Basic product:')
clientCode(tShirt)
console.log()

const printedTShirt = new PrintedProductDecorator(tShirt)
const bluePrintedTShirt = new ProductWithColorDecorator(printedTShirt, 'azul')
console.log('Decorated product:')
clientCode(bluePrintedTShirt)
