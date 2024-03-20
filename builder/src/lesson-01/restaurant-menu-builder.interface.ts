import { RestaurantMenuBuilder } from './restaurant-menu-builder'

export interface IRestaurantMenu {
    buildStarter(name: string, price: number): RestaurantMenuBuilder
    buildMainCourse(name: string, price: number): RestaurantMenuBuilder
    buildDessert(name: string, price: number): RestaurantMenuBuilder
}