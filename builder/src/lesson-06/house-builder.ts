import { House, Room, Style } from './house'
import { IHouseBuilder } from './house-builder.interface'

export class HouseBuilder implements IHouseBuilder {
  private house?: House

  constructor() {
    this.reset()
  }

  buildRoom(room: Room): HouseBuilder {
    this.house!.addRoom(room)
    return this
  }

  buildStyle(style: Style): HouseBuilder {
    this.house!.style = style
    return this
  }

  public reset(): void {
    this.house = new House()
  }

  public getHouse(): House {
    const house = this.house!
    this.reset()
    return house
  }
}