import { Abstraction } from './abstraction'
import { ConcreteImplementationA } from './concrete-implementation-a'
import { ConcreteImplementationB } from './concrete-implementation -b'
import { ExtendedAbstraction } from './extended-abstraction'

/**
 * Except for the initialization phase, where an Abstraction object gets linked
 * with a specific Implementation object, the client code should only depend on
 * the Abstraction class. This way the client code can support any abstraction-
 * implementation combination.
 */
function clientCode(abstraction: Abstraction) {
	// ..

	console.log(abstraction.operation())

	// ..
}

/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)
clientCode(abstraction)

console.log('')

implementation = new ConcreteImplementationB()
abstraction = new ExtendedAbstraction(implementation)
clientCode(abstraction)
