import { Component } from './component'

/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
export class Composite extends Component {
	protected Children: Component[] = []

	/**
	 * A composite object can add or remove other components (both simple or
	 * complex) to or from its child list.
	 */
	public add(component: Component): void {
		this.Children.push(component)
		component.parent = this
	}

	public remove(component: Component): void {
		const componentIndex = this.Children.indexOf(component)
		if (componentIndex === -1) return
		this.Children.splice(componentIndex, 1)

		component.parent = null
	}

	public isComposite(): boolean {
		return true
	}

	/**
	 * The Composite executes its primary logic in a particular way. It
	 * traverses recursively through all its children, collecting and summing
	 * their results. Since the composite's children pass these calls to their
	 * children and so forth, the whole object tree is traversed as a result.
	 */
	public operation(): string {
		const results = []
		for (const child of this.Children) {
			results.push(child.operation())
		}

		return `Branch(${results.join('+')})`
	}
}
