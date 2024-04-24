import type { Device } from './device.interface'

export class TV implements Device {
	private name: string
	private volume: number
	private powerStatus: boolean

	constructor(name?: string) {
		this.name = name ?? 'TV'
		this.volume = 50
		this.powerStatus = false
	}

	getName(): string {
		return this.name
	}

	setPower(powerStatus: boolean): void {
		this.powerStatus = powerStatus
	}

	getPower(): boolean {
		return this.powerStatus
	}

	setVolume(volume: number): void {
		if (volume < 0 || volume > 100) return
		this.volume = volume
	}

	getVolume(): number {
		return this.volume
	}
}
