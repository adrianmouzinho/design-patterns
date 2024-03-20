import { TransmissionType } from './car'
import { CarBuilder } from './car-builder'

export interface ICarBuilder {
  buildModel(model: string): CarBuilder
  buildColor(color: string): CarBuilder
  buildEngineSize(engineSize: number): CarBuilder
  buildTransmissionType(transmissionType: TransmissionType): CarBuilder
}