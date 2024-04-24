import { Radio } from './radio'
import { RemoteControl } from './remote-control'
import { RemoteControlWithVolume } from './remote-control-with-volume'
import { TV } from './tv'

function clientCode(
	remoteControl: RemoteControl | RemoteControlWithVolume,
): void {
	remoteControl.togglePower()
	if (!('volumeUp' in remoteControl)) return
	remoteControl.volumeUp()
	remoteControl.volumeUp()
	remoteControl.volumeDown()
}

const radio = new Radio()
const tv = new TV()
console.log('Remote control:')
clientCode(new RemoteControl(radio))
console.log()
console.log('Remote control with volume:')
clientCode(new RemoteControlWithVolume(tv))
