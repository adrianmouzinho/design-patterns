import { Coffee } from './coffee'
import { DrinkWithMilkDecorator } from './drink-with-milk-decorator'
import { DrinkWithSugarDecorator } from './drink-with-sugar-decorator'
import type { Drink } from './drink.interface'

function clientCode(drink: Drink) {
	console.log(`Name: ${drink.getName()}`)
	console.log(`Price: ${drink.getPrice()}`)
	console.log(`Ingredients: ${drink.getIngredients().join(', ')}`)
}

const expresso = new Coffee('Expresso', 8.5, ['Café expresso'])
const expressoWithMilk = new DrinkWithMilkDecorator(expresso)
const expressoWithSugar = new DrinkWithSugarDecorator(expressoWithMilk)
clientCode(expressoWithSugar)
