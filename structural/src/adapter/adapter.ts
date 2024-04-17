import type { Adaptee } from './adaptee'
import { Target } from './target'
/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
export class Adapter extends Target {
    private adaptee: Adaptee

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}