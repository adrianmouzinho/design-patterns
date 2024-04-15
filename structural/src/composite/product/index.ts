import { CompositeProduct } from './composite-product'
import { Product } from './product'

const productBox = new CompositeProduct()
const pen = new Product('Caneta', 42)
const book = new Product('Livro', 100)
const backpack = new Product('Mochila', 250)
productBox.add(pen, book, backpack)

const anotherBox = new CompositeProduct()
const notebook = new Product('Livro', 3_000)
const mouse = new Product('Mouse', 50)
anotherBox.add(notebook, mouse)
productBox.add(anotherBox)

console.log(productBox)
console.log(productBox.getPrice())
