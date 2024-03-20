export type TransmissionType = 'Manual' | 'Automático' | 'CVT' | 'Semi-automático'

export class Car {
  private _model?: string
  private _color?: string
  private _engineSize?: number
  private _transmissionType?: TransmissionType

  public get model(): string | undefined {
    return this._model
  }

  public set model(model: string) {
    this._model = model
  }

  public get color(): string | undefined {
    return this._color
  }

  public set color(color: string) {
    this._color = color
  }

  public get engineSize(): number | undefined {
    return this._engineSize
  }

  public set engineSize(engineSize: number) {
    this._engineSize = engineSize
  }

  public get transmissionType(): TransmissionType | undefined {
    return this._transmissionType
  }

  public set transmissionType(transmissionType: TransmissionType) {
    this._transmissionType = transmissionType
  }
}