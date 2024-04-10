/**
 * The base Component class declares common operations for both simple and
 * complex objects of a composition.
 */
export abstract class Component {
	protected Parent!: Component | null

	/**
	 * Optionally, the base Component can declare an interface for setting and
	 * accessing a parent of the component in a tree structure. It can also
	 * provide some default implementation for these methods.
	 */
	public set parent(parent: Component | null) {
		this.Parent = parent
	}

	public get parent() {
		return this.Parent
	}

	/**
	 * In some cases, it would be beneficial to define the child-management
	 * operations right in the base Component class. This way, you won't need to
	 * expose any concrete component classes to the client code, even during the
	 * object tree assembly. The downside is that these methods will be empty
	 * for the leaf-level components.
	 */
	public add(component: Component) {}

	public remove(component: Component) {}

	/**
	 * You can provide a method that lets the client code figure out whether a
	 * component can bear children.
	 */
	public isComposite(): boolean {
		return false
	}

	/**
	 * The base Component may implement some default behavior or leave it to
	 * concrete classes (by declaring the method containing the behavior as
	 * "abstract").
	 */
	public abstract operation(): string
}
