import { Room, Style } from './house'
import { HouseBuilder } from './house-builder'

export interface IHouseBuilder {
  buildRoom(room: Room): HouseBuilder
  buildStyle(style: Style): HouseBuilder
}