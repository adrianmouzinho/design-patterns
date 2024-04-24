import { RemoteControl } from './remote-control'

export class RemoteControlWithVolume extends RemoteControl {
	volumeUp(): void {
		if (!this.device.getPower()) {
			console.log(`can't increase the volume: ${this.device.getName()} is off`)
			return
		}
		this.device.setVolume(this.device.getVolume() + 10)
		console.log(`${this.device.getName()} volume: ${this.device.getVolume()}`)
	}

	volumeDown(): void {
		if (!this.device.getPower()) {
			console.log(`can't increase the volume: ${this.device.getName()} is off`)
			return
		}
		this.device.setVolume(this.device.getVolume() - 10)
		console.log(`${this.device.getName()} volume: ${this.device.getVolume()}`)
	}
}
