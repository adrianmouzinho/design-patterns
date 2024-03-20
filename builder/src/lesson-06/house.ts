export type Room = {
  name: string
  width: number
  length: number
  amount: number
}
export type Style = 'Colonial' | 'Cape Cod' | 'Ranch' | 'Craftsman' | 'Tudor' | 'Mediterrâneo' | 'Moderno' | 'Vitoriano' | 'Fazenda' | 'Cottage'

export class House {
  private _rooms?: Room[] = []
  private _style?: Style

  public get rooms(): Room[] | undefined {
    return this._rooms
  }

  public addRoom(room: Room) {
    this.rooms?.push(room)
  }

  public get style(): Style | undefined {
    return this._style
  }

  public set style(style: Style) {
    this._style = style
  }
}