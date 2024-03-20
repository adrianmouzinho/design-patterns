type Category = 'Entrada' | 'Prato principal' | 'Sobremesa'

type Item = {
    name: string
    category: Category
    price: number
}


export class RestaurantMenu {
    private items: Item[] = []

    public getStarters() {
        return this.items.filter(item => item.category === 'Entrada')
    }

    public getMainCourse() {
        return this.items.filter(item => item.category === 'Prato principal')
    }

    public getDesserts() {
        return this.items.filter(item => item.category === 'Sobremesa')
    }

    public addItem({ name, category, price }: Item) {
        this.items.push({
            name,
            category,
            price
        })
    }
}