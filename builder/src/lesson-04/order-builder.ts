import { Address, Item, Order } from './order'
import { IOrderBuilder } from './order-builder.interface'


export class OrderBuilder implements IOrderBuilder {
  private order?: Order

  constructor() {
    this.reset()
  }

  buildCustomer(customer: string): OrderBuilder {
    this.order!.customer = customer
    return this
  }

  buildItem(item: Item): OrderBuilder {
    this.order!.addItem(item)
    return this
  }

  buildAddress(address: Address): OrderBuilder {
    this.order!.address = address
    return this
  }

  public reset(): void {
    this.order = new Order()
  }

  public getOrder(): Order {
    const order = this.order!
    this.reset()
    return order
  }
}