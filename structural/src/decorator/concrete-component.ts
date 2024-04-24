import type { Component } from './component.interface'

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
export class ConcreteComponent implements Component {
	public operation(): string {
		return 'ConcreteComponent'
	}
}
