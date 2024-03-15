import { RestaurantMenu } from "./restaurant-menu";
import { IRestaurantMenu } from "./restaurant-menu-builder.interface";

export class RestaurantMenuBuilder implements IRestaurantMenu {
    private restaurantMenu?: RestaurantMenu

    constructor() {
        this.reset()
    }

    public reset() {
        this.restaurantMenu = new RestaurantMenu()
    }

    public buildStarter(name: string, price: number): RestaurantMenuBuilder {
        this.restaurantMenu!.addItem({
            name,
            category: 'starter',
            price
        })
        return this
    }

    public buildMainCourse(name: string, price: number): RestaurantMenuBuilder {
        this.restaurantMenu!.addItem({
            name,
            category: 'main course',
            price
        })
        return this
    }

    public buildDessert(name: string, price: number): RestaurantMenuBuilder {
        this.restaurantMenu!.addItem({
            name,
            category: 'dessert',
            price
        })
        return this
    }

    public getRestaurantMenu() {
        const restaurantMenu = this.restaurantMenu
        this.reset()
        return restaurantMenu
    }
}