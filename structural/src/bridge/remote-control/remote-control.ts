import type { Device } from './device.interface'

export class RemoteControl {
	protected device: Device

	constructor(device: Device) {
		this.device = device
	}

	togglePower(): void {
		this.device.setPower(!this.device.getPower())
		console.log(
			`${this.device.getName()} power status: ${this.device.getPower()}`,
		)
	}
}
