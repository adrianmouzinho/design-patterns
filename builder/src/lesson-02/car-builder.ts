import { Car, TransmissionType } from './car'
import { ICarBuilder } from './car-builder.interface'

export class CarBuilder implements ICarBuilder {
  private car?: Car

  constructor() {
    this.reset()
  }

  buildModel(model: string): CarBuilder {
    this.car!.model = model
    return this
  }

  buildColor(color: string): CarBuilder {
    this.car!.color = color
    return this
  }

  buildEngineSize(engineSize: number): CarBuilder {
    this.car!.engineSize = engineSize
    return this
  }

  buildTransmissionType(transmissionType: TransmissionType): CarBuilder {
    this.car!.transmissionType = transmissionType
    return this
  }

  public reset(): void {
    this.car = new Car()
  }

  public getCar(): Car {
    const car = this.car!
    this.reset()
    return car
  }
}