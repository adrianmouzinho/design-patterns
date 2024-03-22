import { ConcreteProduct2 } from './concrete-product-2'
import { Creator } from './creator'
import { Product } from './product.interface'

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2()
  }
}
