import { CarBuilder } from './car-builder'

const builder = new CarBuilder()

const car1 = builder
  .buildModel('Toyota Corolla')
  .buildColor('Prata')
  .buildEngineSize(1.8)
  .buildTransmissionType('Automático')
  .getCar()

const car2 = builder
  .buildModel('BMW 3 Series')
  .buildColor('Branco')
  .buildEngineSize(2.0)
  .buildTransmissionType('Semi-automático')
  .getCar()

console.log(car1)
console.log(car2)