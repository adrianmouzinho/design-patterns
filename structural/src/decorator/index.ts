import type { Component } from './component.interface'
import { ConcreteComponent } from './concrete-component'
import { ConcreteDecoratorA } from './concrete-decorator-a'
import { ConcreteDecoratorB } from './concrete-decorator-b'

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component: Component) {
	// ...

	console.log(`RESULT: ${component.operation()}`)

	// ...
}

/**
 * This way the client code can support both simple components...
 */
const simple = new ConcreteComponent()
console.log("Client: I've got a simple component:")
clientCode(simple)
console.log('')

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple)
const decorator2 = new ConcreteDecoratorB(decorator1)
console.log("Client: Now I've got a decorated component:")
clientCode(decorator2)
