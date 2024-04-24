import type { Implementation } from './implementation.interface'

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */
export class ConcreteImplementationB implements Implementation {
	public operationImplementation(): string {
		return "ConcreteImplementationB: Here's the result on the platform B."
	}
}
