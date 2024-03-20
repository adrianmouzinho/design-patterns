export type Dough = 'Tradicional' | 'Integral' | 'Sem glúten'
export type Sauce = 'Tradicional de tomate' | 'Branco' | 'Barbecue'
export type Border = 'Sem borda' | 'Catupiry' | 'Cheddar' | 'Requeijão'
export type Flavor = 'Calabresa' | 'Frango com Catupiry' | '4 Queijos' | 'Portuguesa'

export class Pizza {
  private _dough?: Dough
  private _sauce?: Sauce
  private _border?: Border
  private _flavor?: Flavor

  public get dough(): Dough | undefined {
    return this._dough
  }

  public set dough(dough: Dough) {
    this._dough = dough
  }

  public get sauce(): Sauce | undefined {
    return this._sauce
  }

  public set sauce(sauce: Sauce) {
    this._sauce = sauce
  }

  public get border(): Border | undefined {
    return this._border
  }

  public set border(border: Border) {
    this._border = border
  }

  public get flavor(): Flavor | undefined {
    return this._flavor
  }

  public set flavor(flavor: Flavor) {
    this._flavor = flavor
  }
}