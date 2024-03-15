type Category = 'starter' | 'main course' | 'dessert'

type Item = {
    name: string
    category: Category
    price: number
}


export class RestaurantMenu {
    private items: Item[] = []

    public starters() {
        return this.items.filter(item => item.category === 'starter')
    }

    public mainCourse() {
        return this.items.filter(item => item.category === 'main course')
    }

    public desserts() {
        return this.items.filter(item => item.category === 'dessert')
    }

    public addItem({ name, category, price }: Item) {
        this.items.push({
            name,
            category,
            price
        })
    }
}