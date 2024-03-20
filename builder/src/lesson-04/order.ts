export type Item = {
  name: string
  price: number
  amount: number
}

export type Address = {
  uf: string
  city: string
  cep: string
}

export class Order {
  private _customer?: string
  private _itens?: Item[] = []
  private _address?: Address

  public get customer(): string | undefined {
    return this._customer
  }

  public set customer(customer: string) {
    this._customer = customer
  }

  public get itens(): Item[] | undefined {
    return this._itens
  }

  public addItem(item: Item) {
    this.itens?.push(item)
  }

  public get address(): Address | undefined {
    return this._address
  }

  public set address(address: Address) {
    this._address = address
  }
}