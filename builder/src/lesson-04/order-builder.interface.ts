import { Address, Item } from './order'
import { OrderBuilder } from './order-builder'

export interface IOrderBuilder {
  buildCustomer(customer: string): OrderBuilder
  buildItem(item: Item): OrderBuilder
  buildAddress(address: Address): OrderBuilder
}